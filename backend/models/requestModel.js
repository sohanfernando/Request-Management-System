// backend/models/requestModel.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestId: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  location: { type: String, required: true },
  service: { type: String, required: true },
  status: {
    type: String,
    enum: ['NEW', 'IN_PROGRESS', 'ON_HOLD', 'REJECTED', 'CANCELLED'],
    default: 'NEW',
  },
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    default: 'LOW',
  },
  department: { type: String, required: true },
  requestedBy: { type: String, required: true },
  assignedTo: { type: String, required: true },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
