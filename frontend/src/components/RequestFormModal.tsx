import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

interface RequestFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  editingRequest?: any;
}

const UploadBox = styled('div')({
  border: '3px dashed #E0E0E0',
  borderRadius: '10px',
  padding: '60px',
  textAlign: 'center',
  color: '#A61E44',
  cursor: 'pointer',
});

const RequestFormModal: React.FC<RequestFormModalProps> = ({ open, onClose, onSubmit, editingRequest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    requestId: '',
    createdOn: '',
    location: '',
    service: '',
    status: 'NEW',
    department: '',
    requestedBy: '',
    assignedTo: '',
    priority: 'LOW',
  });

  useEffect(() => {
    if (editingRequest) {
      setFormData(editingRequest);
    } else {
      setFormData({
        requestId: '',
        createdOn: '',
        location: '',
        service: '',
        status: 'NEW',
        department: '',
        requestedBy: '',
        assignedTo: '',
        priority: 'LOW',
      });
    }
  }, [editingRequest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isMobile ? "xs" : isTablet ? "sm" : "md"}
      fullWidth
      fullScreen={isMobile}
      sx={{
        '& .MuiDialog-paper': {
          margin: { xs: 0, sm: 'auto' },
          borderRadius: { xs: 0, sm: 2 }
        }
      }}
    >
      <DialogTitle sx={{
        pb: { xs: 1, sm: 2 },
        pr: { xs: 6, sm: 8 }
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '600',
            color: '#101B33',
            fontFamily: 'Ciutadella',
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          {editingRequest ? 'Edit Request' : 'Create New Request'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: { xs: 8, sm: 8 },
            top: { xs: 8, sm: 8 }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="requestId"
              label="Request ID"
              variant="outlined"
              value={formData.requestId}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            />

            <TextField
              fullWidth
              name="createdOn"
              label="Created On"  // (month/date/year)
              variant="outlined"
              value={formData.createdOn}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            />

            <TextField
              fullWidth
              name="location"
              label="Location"
              variant="outlined"
              select
              value={formData.location}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <MenuItem value="F103-Bed">F103-Bed</MenuItem>
              <MenuItem value="F104-Bed">F104-Bed</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="service"
              label="Service"
              variant="outlined"
              value={formData.service}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="status"
              label="Status"
              variant="outlined"
              select
              value={formData.status}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <MenuItem value="NEW">NEW</MenuItem>
              <MenuItem value="IN_PROGRESS">IN PROGRESS</MenuItem>
              <MenuItem value="COMPLETED">COMPLETED</MenuItem>
              <MenuItem value="ESCALATED">ESCALATED</MenuItem>
              <MenuItem value="ON_HOLD">ON HOLD</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="priority"
              label="Priority"
              variant="outlined"
              select
              value={formData.priority}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <MenuItem value="LOW">Low</MenuItem>
              <MenuItem value="MEDIUM">Medium</MenuItem>
              <MenuItem value="HIGH">High</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="department"
              label="Department"
              variant="outlined"
              select
              value={formData.department}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <MenuItem value="Patient Experience">Patient Experience</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="requestedBy"
              label="Requested By"
              variant="outlined"
              value={formData.requestedBy}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            />

            <TextField
              fullWidth
              name="assignedTo"
              label="Assigned To"
              variant="outlined"
              value={formData.assignedTo}
              onChange={handleInputChange}
              required
              size="small"
              sx={{ mb: { xs: 2, sm: 3 } }}
            />
          </Grid>
        </Grid>

        <Box sx={{
          mt: { xs: 2, sm: 3 },
          mb: { xs: 2, sm: 3 }
        }}>
          <UploadBox sx={{
            padding: { xs: '40px 20px', sm: '60px' },
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}>
            <Typography>
              <span style={{ color: '#830823', cursor: 'pointer' }}>Browse</span> or drag and drop the file.
            </Typography>
          </UploadBox>
        </Box>

        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          sx={{
            mt: { xs: 2, sm: 3 },
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            gap: { xs: 1, sm: 2 }
          }}
        >
          <Grid item xs={12} sm="auto">
            <Button
              variant="outlined"
              onClick={onClose}
              fullWidth={isMobile}
              sx={{
                color: '#830823',
                borderColor: '#830823',
                minWidth: { sm: '100px' }
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth={isMobile}
              sx={{
                backgroundColor: '#830823',
                color: 'white',
                minWidth: { sm: '100px' }
              }}
            >
              {editingRequest ? 'Update' : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RequestFormModal;
