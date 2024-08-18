const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Card = require('./models/Card');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Ping endpoint
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Create a new card
app.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

