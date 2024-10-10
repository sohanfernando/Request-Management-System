const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));


const requestSchema = new mongoose.Schema({
  requestId: String,
  createdOn: Date,
  location: String,
  service: String,
  status: { type: String, enum: ['NEW', 'IN_PROGRESS', 'COMPLETED', 'ESCALATED', 'ON_HOLD'], default: 'NEW' },
  priority: { type: String, enum: ['HIGH', 'MEDIUM', 'LOW'], default: 'LOW' },
  department: String,
  requestedBy: String,
  assignedTo: String,
});

const Request = mongoose.model('Request', requestSchema);

app.get('/api/requests', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching requests' });
  }
});


app.post('/api/requests', async (req, res) => {
  console.log('Request received with data:', req.body);
  try {
    const newRequest = new Request(req.body);
    const savedRequest = await newRequest.save();
    res.json(savedRequest);
  } catch (error) {
    console.error('Error saving request:', error);
    res.status(500).json({ error: 'Error creating request' });
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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
