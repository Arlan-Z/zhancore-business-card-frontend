import api from './api';

export const getProjects = async () => {
  const { data } = await api.get('/project-reviews');
  return data;
};

export const getClients = async () => {
  const { data } = await api.get('/client-reviews');
  return data;
};

export const saveContact = async (contact: {
  name: string;
  details: string;
  message: string;
}) => {
  const { data } = await api.post('/client/landing-request', contact);
  return data;
};
