import requestClient from "../RequestClient/index";

const ClinicApi = {
  getAllClinics() {
    const urlParam = "clinic";

    return requestClient.get(urlParam);
  },

  getOne(id) {
    const urlParam = `clinic/${id}`;

    return requestClient.get(urlParam);
  },

  addNewClinic(data, token) {
    const urlParam = `clinic`;

    return requestClient.post(urlParam, data, token);
  },

  deleteClinic(id, token) {
    const urlParam = `clinic/${id}`;

    return requestClient.delete(urlParam, token);
  },

  updateClinic(id, data, token) {
    const urlParam = `clinic/${id}`;

    return requestClient.put(urlParam, data, token);
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
