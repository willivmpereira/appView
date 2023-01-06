import axios from "axios";

export const api = axios.create({
  baseURL: "https://prado-cadastro-api.herokuapp.com/api/v1",
});