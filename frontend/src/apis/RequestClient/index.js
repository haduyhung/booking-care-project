import axios from "axios";

const token = "";
const requestClient = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Authorization: Bearer`${token}`,
  },
});

export default requestClient;
