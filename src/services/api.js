import axios from "axios";

export const API_KEY = "ec6d53f8c6e364ecee8e6df9d9382d56";
export const AXIOS_API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
