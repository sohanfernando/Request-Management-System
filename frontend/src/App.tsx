// src/App.tsx
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import Navbar from './components/Navbar';
import StatusCircles from './components/StatusCircles';
import RequestTable from './components/RequestTable';
import FilterBar from './components/FilterBar';
import RequestFormModal from './components/RequestFormModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <StatusCircles handleOpenModal={handleOpenModal} />
        <FilterBar />
        <RequestTable />
        <RequestFormModal open={isModalOpen} onClose={handleCloseModal} />
      </Container>
    </div>
  );
};

export default App;
