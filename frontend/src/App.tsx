import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
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

  useEffect(() => {
    axios.get('http://localhost:5000/api/requests')
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

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
    <div>
      <Navbar />
      <Container>
        <StatusCircles handleOpenModal={handleOpenModal} requestData={requestData} />
        <FilterBar />
        <RequestTable 
          requestData={requestData} 
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
    </div>
  );
};

export default App;
