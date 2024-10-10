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

app.patch('/api/requests/:id', async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!request) {
      return res.status(404).send({ error: 'Request not found' });
    }
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

app.delete('/api/requests/:id', async (req, res) => {
  try {
    const request = await Request.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).send({ error: 'Request not found' });
    }
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});


module.exports = router;
