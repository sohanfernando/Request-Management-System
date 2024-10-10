const express = require('express');
const Request = require('../models/Request');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { requestId, location, service, status, priority, department, requestedBy, assignedTo } = req.body;

  try {
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

    const savedRequest = await newRequest.save();
    res.json(savedRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    await request.remove();
    res.json({ message: 'Request removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
