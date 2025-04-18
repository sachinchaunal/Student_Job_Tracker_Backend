const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const jobRoutes = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 5000;

// Get allowed origins from environment variables or use defaults
// Format for ALLOWED_ORIGINS env variable: comma-separated list of URLs
// Example: "http://localhost:3000,https://my-app.vercel.app"
const defaultOrigins = ['http://localhost:3000'];

// Add production frontend URL if defined in environment
if (process.env.FRONTEND_URL) {
  defaultOrigins.push(process.env.FRONTEND_URL);
}

// Final list of allowed origins (from ALLOWED_ORIGINS env var or defaults)
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : defaultOrigins;

console.log('Configured allowed origins:', allowedOrigins);

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Student Job Tracker API is running');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'API is healthy', 
    environment: process.env.NODE_ENV || 'development',
    allowedOrigins 
  });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  }); 
