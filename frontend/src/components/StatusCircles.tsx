import React from 'react';
import { Grid, Typography, Paper, Button, Box, useTheme, useMediaQuery } from '@mui/material';

interface StatusCirclesProps {
  handleOpenModal: () => void;
  requestData: { status: string }[];
}

const StatusCircles: React.FC<{ handleOpenModal: () => void; requestData: any[] }> = ({ handleOpenModal, requestData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const statusCounts = {
    new: requestData.filter((req) => req.status === 'NEW').length,
    inProgress: requestData.filter((req) => req.status === 'IN_PROGRESS').length,
    completed: requestData.filter((req) => req.status === 'COMPLETED').length,
    onHold: requestData.filter((req) => req.status === 'ON_HOLD').length,
  };

  return (
    <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
      <Grid 
        container 
        alignItems="center" 
        justifyContent="space-between"
        spacing={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' }
        }}
      >
        <Grid item>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: { xs: 2, sm: 3 }
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                textAlign: { xs: 'center', sm: 'left' },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Requests
            </Typography>
            <Button
              variant="contained"
              sx={{ 
                backgroundColor: '#A61E44', 
                color: 'white', 
                textTransform: 'none',
                minWidth: { xs: '100%', sm: 'auto' },
                py: { xs: 1.5, sm: 1 }
              }}
              onClick={handleOpenModal}
            >
              + New Request
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <Grid 
            container 
            justifyContent={{ xs: 'center', sm: 'flex-end' }}
            spacing={{ xs: 1, sm: 2 }}
            sx={{ 
              flexWrap: 'wrap',
              gap: { xs: 1, sm: 2 }
            }}
          >
            {[
              { label: 'New Requests', count: statusCounts.new, color: '#FFE2E8' },
              { label: 'In Progress Requests', count: statusCounts.inProgress, color: '#D0EEFF' },
              { label: 'Completed Requests', count: statusCounts.completed, color: '#CCF5BB' },
              { label: 'On Hold Requests', count: statusCounts.onHold, color: '#D2D4FF' },
            ].map((status, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  height: { xs: '80px', sm: '90px', md: '100px' },
                  width: { xs: '80px', sm: '90px', md: '100px' },
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  backgroundColor: status.color,
                  minWidth: { xs: '80px', sm: '90px', md: '100px' },
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    fontSize: { xs: '24px', sm: '26px', md: '30px' }
                  }}
                >
                  {status.count}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '8px', sm: '9px' }, 
                    textAlign: 'center',
                    px: 0.5
                  }}
                >
                  {status.label}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatusCircles;
