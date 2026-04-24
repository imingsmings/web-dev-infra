const express = require('express');
const fsRoutes = require('./routes/fs');

const app = express();

app.use(function allowCors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  next();
});

app.use(express.json());

app.get('/api/health', function health(req, res) {
  res.json({ ok: true });
});

app.use(fsRoutes);

app.use(function notFound(req, res) {
  res.status(404).json({
    message: 'Not found.'
  });
});

app.use(function errorHandler(error, req, res, next) {
  void next;
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: error.message || 'Server error.'
  });
});

module.exports = app;
