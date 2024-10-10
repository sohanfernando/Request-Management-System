import React from 'react';
import { Button, Grid, MenuItem, TextField, Typography, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

interface RequestFormModalProps {
  open: boolean;
  onClose: () => void;
}

// Styled components for file upload box
const UploadBox = styled('div')({
  border: '2px dashed #E0E0E0',
  borderRadius: '8px',
  padding: '16px',
  textAlign: 'center',
  color: '#A61E44',
});

const RequestFormModal: React.FC<RequestFormModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" style={{ fontWeight: '600', color: '#101B33', fontFamily:'Ciutadella' }}>
          Create New Request
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>
          {/* Left column (for Floor, Block, Guest Name, Service) */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              type='number'
              label="Select Floor"
              variant="outlined"
              required
              select
              style={{ marginBottom: '16px' }}
            >
              {/* Add options here */}
              <MenuItem value="1">1st Floor</MenuItem>
              <MenuItem value="2">2nd Floor</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Select Block"
              variant="outlined"
              required
              select
              style={{ marginBottom: '16px' }}
            >
              <MenuItem value="A">Block A</MenuItem>
              <MenuItem value="B">Block B</MenuItem>
            </TextField>

            <TextField
              fullWidth
              type='name'
              label="Select Guest"
              variant="outlined"
              required
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              label="Select Service"
              variant="outlined"
              required
              style={{ marginBottom: '16px' }}
            />
          </Grid>

          {/* Right column (for Room/Unit, Phone Number, Department, Priority) */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Select Room / Unit"
              variant="outlined"
              required
              select
              style={{ marginBottom: '16px' }}
            >
              <MenuItem value="101">Room 101</MenuItem>
              <MenuItem value="102">Room 102</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Enter Phone Number"
              variant="outlined"
              required
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              label="Select Department"
              variant="outlined"
              required
              select
              style={{ marginBottom: '16px' }}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Select Priority"
              variant="outlined"
              required
              select
              style={{ marginBottom: '16px' }}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* File Upload Section */}
        <Typography variant="body1" style={{ marginBottom: '8px' }}>
          Upload File
        </Typography>
        <UploadBox>
          <Typography>
            <span style={{ color: '#830823', cursor: 'pointer' }}>Browse</span> or drag and drop the file.
          </Typography>
        </UploadBox>

        {/* Action Buttons */}
        <Grid container justifyContent="flex-end" spacing={2} style={{ marginTop: '16px' }}>
          <Grid item>
            <Button variant="outlined" onClick={onClose} style={{ color: '#830823', borderColor: '#830823' }}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: '#830823', color: 'white' }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RequestFormModal;
