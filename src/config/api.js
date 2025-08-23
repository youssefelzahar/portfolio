// API configuration for connecting React with FastAPI backend
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.vercel.app'
  : 'http://localhost:8000';

export const API_ENDPOINTS = {
  projects: `${API_BASE_URL}/projects`,
  experiences: `${API_BASE_URL}/experiences`,
  dashboard: `${API_BASE_URL}/dashboard`,
  login: `${API_BASE_URL}/login`
};

export default API_BASE_URL;