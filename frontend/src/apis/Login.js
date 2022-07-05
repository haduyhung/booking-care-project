import requestClient from "./RequestClient";

const RegisterApi = {
  addNewUser(data) {
    const urlParam = "auth/login";
    return requestClient.post(urlParam, data);
  },
};

export default RegisterApi;
