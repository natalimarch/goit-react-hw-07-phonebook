import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/contacts",
});

export const getAllContacts = async () => {
  const { data } = await instance.get("/");
  return data;
};

export const addNewContact = async (newContact) => {
  const { data } = await instance.post("/", newContact);
  return data;
};

export const removeContact = async (id) => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export default {
  getAllContacts,
  addNewContact,
  removeContact,
};
