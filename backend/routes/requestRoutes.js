// backend/routes/requestRoutes.js
const express = require('express');
const Request = require('../models/requestModel');

const router = express.Router();

// GET /api/requests - Retrieve all requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/requests - Add a new request
router.post('/', async (req, res) => {
  const { requestId, location, service, status, priority, department, requestedBy, assignedTo } = req.body;

  const newRequest = new Request({
    requestId,
    location,
    service,
    status,
    priority,
    department,
    requestedBy,
    assignedTo,
  });

  try {
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH /api/requests/:id - Update an existing request
router.patch('/:id', async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRequest) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json(updatedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/requests/:id - Delete a request
router.delete('/:id', async (req, res) => {
  try {
    const deletedRequest = await Request.findByIdAndDelete(req.params.id);
    if (!deletedRequest) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
