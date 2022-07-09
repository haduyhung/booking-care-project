import requestClient from "./RequestClient";

const SchedulesApi = {
  getSchedules(param) {
    const urlParam = `schedules`;

    console.log("pram", param);

    return requestClient.get(urlParam, { params: param });
  },

  addNewSchedules(id, data, token) {
    const urlParam = `schedules/${id}`;
    return requestClient.post(urlParam, data, token);
  },
};

export default SchedulesApi;
