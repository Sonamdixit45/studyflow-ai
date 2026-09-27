const express = require('express');
const cors = require('cors');
require('dotenv').config();

const generateStudySet = require('./generate');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'StudyFlow AI server is running',
  });
});

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Prompt is required',
    });
  }

  try {
    console.log('Generating study set for:', prompt);

    const studySet = await generateStudySet(prompt);

    console.log('Study set generated successfully');

    res.json({
      success: true,
      data: studySet,
    });
  } catch (error) {
    console.error('Generation error:', error);

    res.status(500).json({
      success: false,
      message: error.message || 'Failed to generate study set',
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});