# Student Job Tracker

A web application for students to track their job applications. Built with MERN stack (MongoDB, Express, React, Node.js).

## Features

- Add job applications with company, role, status, date, and link
- List all applications in a responsive layout
- Filter applications by status or date
- Update application status
- Delete job applications

## Tech Stack

### Frontend
- React with Hooks
- React Router
- Axios for API requests
- Deployed on Vercel

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Deployed on Render

## Setup Instructions

### Local Development

#### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```
   npm run dev
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variable:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```
   npm start
   ```

### Deployment

#### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `npm install`
   - Start Command: `node src/server.js`
4. Add the environment variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string

#### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure the following settings:
   - Framework Preset: Create React App
4. Add the environment variable:
   - `REACT_APP_API_URL`: Your deployed backend URL (e.g., https://your-app-name.onrender.com/api)

## Troubleshooting Common Issues

### CORS Issues

If you're experiencing CORS issues, ensure that your backend has the correct CORS configuration:

1. Check that the frontend URL is added to the list of allowed origins in the backend's CORS configuration
2. Ensure that your API requests are using the correct URL format with the `/api` prefix

### API Connection Issues

1. Verify that the backend is running and accessible
2. Check that environment variables are correctly set up in both development and production
3. Review the browser console for specific error messages
4. Ensure that API endpoints match between frontend and backend

## API Endpoints

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get a specific job
- `POST /api/jobs` - Create a new job
- `PUT /api/jobs/:id` - Update an existing job
- `DELETE /api/jobs/:id` - Delete a job

## License

This project is licensed under the MIT License. 