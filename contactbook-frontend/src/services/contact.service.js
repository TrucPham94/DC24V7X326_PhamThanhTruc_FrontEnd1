import createApiClient from "./api.service";

class ContactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return (await this.api.get("/")).data;
  }

  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
}

export default new ContactService();
