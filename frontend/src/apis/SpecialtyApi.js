import requestClient from "./RequestClient";

const SpecialtyApi = {
  getAll() {
    const urlParam = "specialty";

    return requestClient.get(urlParam);
  },
  getOne(id) {
    const urlParam = `specialty/${id}`;

    return requestClient.get(urlParam);
  },

  addNewSpecialty(data, token) {
    const urlParam = `specialty`;
    return requestClient.post(urlParam, data, token);
  },

  deleteSpecialty(id, token) {
    const urlParam = `specialty/${id}`;

    return requestClient.delete(urlParam, token);
  },

  update(id, data, token) {
    const urlParam = `specialty/${id}`;

    return requestClient.put(urlParam, data, token);
  },
};

export default SpecialtyApi;
