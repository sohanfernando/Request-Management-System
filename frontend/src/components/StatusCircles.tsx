import React from 'react';
import { Grid, Typography, Paper, Button } from '@mui/material';

interface StatusCirclesProps {
  handleOpenModal: () => void;
  requestData: { status: string }[];
}

const StatusCircles: React.FC<{ handleOpenModal: () => void; requestData: any[] }> = ({ handleOpenModal, requestData }) => {
  const statusCounts = {
    new: requestData.filter((req) => req.status === 'NEW').length,
    inProgress: requestData.filter((req) => req.status === 'IN_PROGRESS').length,
    completed: requestData.filter((req) => req.status === 'COMPLETED').length,
    onHold: requestData.filter((req) => req.status === 'ON_HOLD').length,
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between" style={{ marginBottom: '20px' }}>
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

      <Grid item>
        <Grid container justifyContent="flex-end">
          {[
            { label: 'New Requests', count: statusCounts.new, color: '#FFE2E8' },
            { label: 'In Progress Requests', count: statusCounts.inProgress, color: '#D0EEFF' },
            { label: 'Completed Requests', count: statusCounts.completed, color: '#CCF5BB' },
            { label: 'On Hold Requests', count: statusCounts.onHold, color: '#D2D4FF' },
          ].map((status, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                flexDirection: 'column',
                backgroundColor: status.color,
              }}
            >
              <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '30px' }}>
                {status.count}
              </Typography>
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
