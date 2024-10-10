const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestId: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['NEW', 'IN_PROGRESS', 'ON_HOLD', 'REJECTED', 'CANCELLED', 'COMPLETED', 'ESCALATED', 'DELAYED'],
    default: 'NEW',
  },
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW', 'EMERGENCY'],
    default: 'MEDIUM',
  },
  department: {
    type: String,
    required: true,
  },
  requestedBy: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Request', requestSchema);
