import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button, IconButton } from '@mui/material';
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
      return <Chip label="NEW" style={{ backgroundColor: '#FFEB3B' }} />;
    case 'IN_PROGRESS':
      return <Chip label="IN PROGRESS" style={{ backgroundColor: '#64DD17', color: '#fff' }} />;
    case 'COMPLETED':
      return <Chip label="COMPLETED" style={{ backgroundColor: '#9575CD', color: '#fff' }} />;
    case 'ON_HOLD':
      return <Chip label="ON HOLD" style={{ backgroundColor: '#FF7043', color: '#fff' }} />;
    case 'ESCALATED':
      return <Chip label="ESCALATED" style={{ backgroundColor: '#FF5252', color: '#fff' }} />;
    case 'DELAYED':
      return <Chip label="DELAYED" style={{ backgroundColor: '#FF5252', color: '#fff' }} />;
    default:
      return <Chip label={status} />;
  }
};

const getPriorityChip = (priority: string) => {
  switch (priority) {
    case 'HIGH':
      return <Chip label="HIGH" style={{ backgroundColor: '#FF5252', color: '#fff' }} />;
    case 'MEDIUM':
      return <Chip label="MEDIUM" style={{ backgroundColor: '#FFCA28' }} />;
    case 'LOW':
      return <Chip label="LOW" style={{ backgroundColor: '#66BB6A', color: '#fff' }} />;
    case 'EMERGENCY':
      return <Chip label="EMERGENCY" style={{ backgroundColor: '#D50000', color: '#fff' }} />;
    default:
      return <Chip label={priority} />;
  }
};

const RequestTable: React.FC<RequestTableProps> = ({ requestData, onDelete, onEdit }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: '#C19C27' }}>
          <TableRow>
            <TableCell>SL No</TableCell>
            <TableCell>Request ID</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Requested By</TableCell>
            <TableCell>Assigned To</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestData.map((request, index) => (
            <TableRow key={request._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{request.requestId}</TableCell>
              <TableCell>{request.createdOn}</TableCell>
              <TableCell>{request.location}</TableCell>
              <TableCell>{request.service}</TableCell>
              <TableCell>{getStatusChip(request.status)}</TableCell>
              <TableCell>{request.department}</TableCell>
              <TableCell>{request.requestedBy}</TableCell>
              <TableCell>{request.assignedTo}</TableCell>
              <TableCell>{getPriorityChip(request.priority)}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(request)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(request._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequestTable;
