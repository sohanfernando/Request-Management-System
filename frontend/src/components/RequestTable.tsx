import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface RequestTableProps {
  requestData: any[];
  onDelete: (id: string) => void;
  onEdit: (request: any) => void;
}

const getStatusChip = (status: string) => {
  switch (status) {
    case 'NEW':
      return <Chip label="NEW" style={{ backgroundColor: '#FFEB3B' }} size="small" />;
    case 'IN_PROGRESS':
      return <Chip label="IN PROGRESS" style={{ backgroundColor: '#64DD17', color: '#fff' }} size="small" />;
    case 'COMPLETED':
      return <Chip label="COMPLETED" style={{ backgroundColor: '#9575CD', color: '#fff' }} size="small" />;
    case 'ON_HOLD':
      return <Chip label="ON HOLD" style={{ backgroundColor: '#FF7043', color: '#fff' }} size="small" />;
    case 'ESCALATED':
      return <Chip label="ESCALATED" style={{ backgroundColor: '#FF5252', color: '#fff' }} size="small" />;
    case 'DELAYED':
      return <Chip label="DELAYED" style={{ backgroundColor: '#FF5252', color: '#fff' }} size="small" />;
    default:
      return <Chip label={status} size="small" />;
  }
};

const getPriorityChip = (priority: string) => {
  switch (priority) {
    case 'HIGH':
      return <Chip label="HIGH" style={{ backgroundColor: '#FF5252', color: '#fff' }} size="small" />;
    case 'MEDIUM':
      return <Chip label="MEDIUM" style={{ backgroundColor: '#FFCA28' }} size="small" />;
    case 'LOW':
      return <Chip label="LOW" style={{ backgroundColor: '#66BB6A', color: '#fff' }} size="small" />;
    case 'EMERGENCY':
      return <Chip label="EMERGENCY" style={{ backgroundColor: '#D50000', color: '#fff' }} size="small" />;
    default:
      return <Chip label={priority} size="small" />;
  }
};

const RequestTable: React.FC<RequestTableProps> = ({ requestData, onDelete, onEdit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      overflowX: 'auto',
      '& .MuiTableContainer-root': {
        minWidth: { xs: '800px', sm: 'auto' }
      }
    }}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          '& .MuiTableCell-root': {
            padding: { xs: '8px 4px', sm: '12px 8px', md: '16px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            whiteSpace: 'nowrap'
          },
          '& .MuiTableHead-root .MuiTableCell-root': {
            backgroundColor: '#C19C27',
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL No</TableCell>
              <TableCell>Request ID</TableCell>
              <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Created On</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Status</TableCell>
              <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>Department</TableCell>
              <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Requested By</TableCell>
              <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>Assigned To</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestData.map((request, index) => (
              <TableRow
                key={request._id}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{request.requestId}</TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{request.createdOn}</TableCell>
                <TableCell>{request.location}</TableCell>
                <TableCell>{request.service}</TableCell>
                <TableCell>{getStatusChip(request.status)}</TableCell>
                <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>{request.department}</TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{request.requestedBy}</TableCell>
                <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>{request.assignedTo}</TableCell>
                <TableCell>{getPriorityChip(request.priority)}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <IconButton
                      onClick={() => onEdit(request)}
                      size="small"
                      sx={{
                        color: '#1976d2',
                        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' }
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => onDelete(request._id)}
                      size="small"
                      sx={{
                        color: '#d32f2f',
                        '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.04)' }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RequestTable;
