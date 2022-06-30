import requestClient from "./requestClient";

const ClinicApi = {
  getAll(token) {
    const urlParam = "clinic";

    return requestClient.get(urlParam);
  },

  getOne(id, token) {
    const urlParam = `clinic/${id}`;

    return requestClient.get(urlParam);
  },

  addNewClinic(data) {
    const urlParam = `clinic`;

    return requestClient.post(urlParam, data);
  },

  deleteClinic(id, user) {
    const urlParam = `clinic/${id}`;

    return requestClient.delete(urlParam);
  },

  updateClinic(id, data, user) {
    const urlParam = `clinic/${id}`;

    return requestClient.put(urlParam, data);
  },

  getOneInfo(id, token) {
    const urlParam = `clinic-infor/${id}`;

    return requestClient.get(urlParam);
  },

  addClinicInfo(data) {
    const urlParam = `clinic-infor`;

    return requestClient.post(urlParam, data);
  },

  deleteClinicInfo(id, user) {
    const urlParam = `clinic-infor/${id}`;

    return requestClient.delete(urlParam);
  },

  updateClinicInfo(id, data, user) {
    const urlParam = `clinic-infor/${id}`;

    return requestClient.put(urlParam, data);
  },
};

export default ClinicApi;
