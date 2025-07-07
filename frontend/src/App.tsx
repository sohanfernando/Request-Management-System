import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import StatusCircles from './components/StatusCircles';
import RequestTable from './components/RequestTable';
import FilterBar from './components/FilterBar';
import RequestFormModal from './components/RequestFormModal';
import axios from 'axios';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [requestData, setRequestData] = useState<any[]>([]);
  const [editingRequest, setEditingRequest] = useState<any | null>(null);
  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/requests')
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  // Filtering logic
  const filteredRequests = requestData.filter((request) => {
    const matchesSearch =
      searchQuery === '' ||
      (request.requestId && request.requestId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (request.location && request.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (request.service && request.service.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (request.department && request.department.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = status === '' || request.status === status || request.status === status.toUpperCase();
    const matchesDepartment = department === '' || request.department === department;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingRequest(null);
  };

  const handleFormSubmit = (newRequest: any) => {
    if (editingRequest) {
      axios.patch(`http://localhost:5000/api/requests/${editingRequest._id}`, newRequest)
        .then((response) => {
          setRequestData((prevData) => prevData.map((request) => request._id === editingRequest._id ? response.data : request));
        })
        .catch((error) => console.error("Error updating request:", error));
    } else {
      axios.post('http://localhost:5000/api/requests', newRequest)
        .then((response) => {
          setRequestData((prevData) => [...prevData, response.data]);
        })
        .catch((error) => console.error("Error adding new request:", error));
    }

    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:5000/api/requests/${id}`)
      .then((response) => {
        setRequestData((prevData) => prevData.filter((request) => request._id !== id));
      })
      .catch((error) => console.error("Error deleting request:", error));
  };

  const handleEdit = (request: any) => {
    setEditingRequest(request);
    setOpenModal(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2, md: 3 }
        }}
      >
        <StatusCircles handleOpenModal={handleOpenModal} requestData={requestData} />
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          status={status}
          setStatus={setStatus}
          department={department}
          setDepartment={setDepartment}
        />
        <RequestTable 
          requestData={filteredRequests} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
        <RequestFormModal 
          open={openModal} 
          onClose={handleCloseModal} 
          onSubmit={handleFormSubmit} 
          editingRequest={editingRequest}
        />
      </Container>
    </Box>
  );
};

export default App;
