import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Access-Control-Allow-Origin": true },
  mode: "cors",
});
