import React from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';

// Example styles for the circles
const circleStyles = {
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  flexDirection: 'column' as const,
  overflow: 'hidden', // Prevent overflow
};

// Dummy data for the status circles
const statuses = [
  { count: 10, label: 'New Requests', color: '#FFE2E8' },
  { count: 5, label: 'Delayed Requests', color: '#CCF5BB' },
  { count: 2, label: 'Escalated Requests', color: '#D0EEFF' },
  { count: 0, label: 'On Hold Requests', color: '#D2D4FF' },
];

const StatusCircles: React.FC<{ handleOpenModal: () => void }> = ({ handleOpenModal }) => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" style={{ marginBottom: '20px' }}>
      {/* Requests Title and New Request Button */}
      <Grid item>
        <Typography variant="h5" style={{ fontWeight: 'bold', display: 'inline', marginRight: '20px' }}>
          Requests
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: '#A61E44', color: 'white', textTransform: 'none' }}
          onClick={handleOpenModal}
        >
          + New Request
        </Button>
      </Grid>

      {/* Status Circles */}
      <Grid item>
        <Grid container justifyContent="flex-end">
          {statuses.map((status, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{ ...circleStyles, backgroundColor: status.color }}
            >
              {/* Reduce font size for the number */}
              <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '30px' }}>
                {status.count}
              </Typography>
              {/* Keep the label at 14px */}
              <Typography variant="body2" style={{ fontSize: '9px', textAlign: 'center' }}>
                {status.label}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StatusCircles;
