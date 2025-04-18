// frontend/lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const getProfile = () => api.get('profile/');
export const getSkills = () => api.get('skills/');
export const getProjects = () => api.get('projects/');
