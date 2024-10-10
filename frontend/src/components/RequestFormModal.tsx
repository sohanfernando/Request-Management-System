import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

interface RequestFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

const UploadBox = styled('div')({
  border: '2px dashed #E0E0E0',
  borderRadius: '8px',
  padding: '16px',
  textAlign: 'center',
  color: '#A61E44',
  cursor: 'pointer',
});

const RequestFormModal: React.FC<RequestFormModalProps> = ({ open, onClose, onSubmit }) => {
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" style={{ fontWeight: '600', color: '#101B33', fontFamily: 'Ciutadella' }}>
          Create New Request
        </Typography>
        <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="requestId"
              label="Request ID"
              variant="outlined"
              value={formData.requestId}
              onChange={handleInputChange}
              required
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              name="createdOn"
              label="Created On"
              variant="outlined"
              value={formData.createdOn}
              onChange={handleInputChange}
              required
              style={{ marginBottom: '16px' }}
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
              style={{ marginBottom: '16px' }}
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
              style={{ marginBottom: '16px' }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              name="status"
              label="Status"
              variant="outlined"
              select
              value={formData.status}
              onChange={handleInputChange}
              required
              style={{ marginBottom: '16px' }}
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
              style={{ marginBottom: '16px' }}
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
              style={{ marginBottom: '16px' }}
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
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              name="assignedTo"
              label="Assigned To"
              variant="outlined"
              value={formData.assignedTo}
              onChange={handleInputChange}
              required
              style={{ marginBottom: '16px' }}
            />
          </Grid>
        </Grid>

        <UploadBox>
          <Typography>
            <span style={{ color: '#830823', cursor: 'pointer' }}>Browse</span> or drag and drop the file.
          </Typography>
        </UploadBox>

        <Grid container justifyContent="flex-end" spacing={2} style={{ marginTop: '16px' }}>
          <Grid item>
            <Button variant="outlined" onClick={onClose} style={{ color: '#830823', borderColor: '#830823' }}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: '#830823', color: 'white' }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RequestFormModal;