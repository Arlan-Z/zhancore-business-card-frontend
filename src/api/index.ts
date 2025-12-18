import type Project from './models/project'

export const getProjects = async () => {
  const response = await fetch('/api/project-reviews');
  console.log(response)
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

export const getClients = async () => {
  const response = await fetch('/api/client-reviews');
  if (!response.ok) throw new Error('Failed to fetch clients');
  return response.json();
};

export const saveContact = async (contact: { name: string; details: string; message: string }) => {
  const response = await fetch ('/api/client/landing-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  });
  if (!response.ok) throw new Error('Failed to save contact');
  return response.json();
};
