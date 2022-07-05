import requestClient from "../RequestClient";

const UserApi = {
  getAll(token) {
    const urlParam = "user";

    return requestClient.get(urlParam, token);
  },
  getOne(id, token) {
    const urlParam = `user/${id}`;

    return requestClient.get(urlParam, token);
  },

  deleteUser(id, token) {
    const urlParam = `user/${id}`;

    return requestClient.delete(urlParam, token);
  },

  update(id, data, token) {
    const urlParam = `user/${id}`;

    return requestClient.put(urlParam, data, token);
  },
  registerOut(data) {
    const urlParam = "users/register/out";
    return requestClient.post(urlParam, data);
  },
};

export default UserApi;
