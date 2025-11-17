import { api } from "./api.service";

const resource = "/api/contacts"; // path thực tế của backend

export default {
  async getAll() {
    const { data } = await api.get(resource);
    return data;
  },
  async get(id) {
    const { data } = await api.get(`${resource}/${id}`);
    return data;
  },
  async create(payload) {
    const { data } = await api.post(resource, payload);
    return data;
  },
  async update(id, payload) {
    const { data } = await api.put(`${resource}/${id}`, payload);
    return data;
  },
  async delete(id) {
    const { data } = await api.delete(`${resource}/${id}`);
    return data;
  },
};
