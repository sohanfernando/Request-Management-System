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

  useEffect(() => {
    axios.get('http://localhost:5000/api/requests')
      .then((response) => {
        console.log('Data fetched from backend:', response.data);
        setRequestData(response.data);
      })
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleFormSubmit = (newRequest: any) => {
    console.log('Submitting form data:', newRequest);
    axios.post('http://localhost:5000/api/requests', newRequest)
      .then((response) => {
        console.log('Data saved to backend:', response.data);
        setRequestData((prevData) => [...prevData, response.data]);
      })
      .catch((error) => console.error("Error adding new request:", error));
  
    handleCloseModal();
  };
  
  
  return (
    <div>
      <Navbar />
      <Container>
        <StatusCircles handleOpenModal={handleOpenModal} requestData={requestData} />
        <FilterBar />
        <RequestTable requestData={requestData} />
        <RequestFormModal open={openModal} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      </Container>
    </div>
  );
};

export default App;
