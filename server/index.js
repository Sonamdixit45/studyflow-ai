const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'StudyFlow AI server is running',
  });
});
app.post('/api/generate', (req, res) => {
  const { prompt } = req.body;

  console.log('Received prompt:', prompt);

  res.json({
    success: true,
    message: 'Study set request received',
    prompt: prompt,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});