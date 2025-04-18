// frontend/lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProfile = () => api.get('profile/');
export const getSkills = () => api.get('skills/');
export const getProjects = () => api.get('projects/');
