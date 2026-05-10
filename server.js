const express = require('express');
const path = require('path');
const { generateResumeContent } = require('./src/generator');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/generate', (req, res) => {
  const jobDescription = typeof req.body?.jobDescription === 'string'
    ? req.body.jobDescription.trim()
    : '';

  if (!jobDescription) {
    return res.status(400).json({ error: 'Job description is required.' });
  }

  const result = generateResumeContent(jobDescription);
  return res.json(result);
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  // Useful local startup message for both direct Node and Docker runs.
  console.log(`Resume Content Generator running on http://localhost:${port}`);
});
