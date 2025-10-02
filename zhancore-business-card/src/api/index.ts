import axios from "axios";
import type Contact from "./models/contact";
import type Client from "./models/client";
import type Project from "./models/project";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    timeout: 5000
});

export const getClients = async (): Promise<Client[]> => {
  const response = await api.get<Client[]>("api/clients");
  return response.data;
};

export const getProjects = async (): Promise<Project[]> => {
  const res = await api.get<Project[]>("api/projects");
  return res.data;
};

export const saveContact = async (contact: Contact): Promise<Contact> => {
  const res = await api.post<Contact>("api/contactDetails", contact);
  return res.data;
};