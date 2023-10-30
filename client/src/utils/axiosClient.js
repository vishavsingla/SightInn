import { KEY_ACCESS_TOKEN, getItem, setItem } from "./localStorageManager";
import axios from "axios";

const baseURL = "http://localhost:4001";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: baseURL,
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  console.log(response);
  const data = response.data;
  if (response.status === 201) {
    return data;
  }

  const originalRequest = response.config;
  const statusCode = data.statusCode;
  const error = data.error;

  if (
    statusCode === 401 &&
    originalRequest.url === "http://localhost:4001/auth/refresh"
  ) {
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/login", "_self");
    return Promise.reject(error);
  }

  if (statusCode === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const response = await axios
      .create({ withCredentials: true })
      .get("http://localhost:4001/auth/refresh");
    if (response.status === "ok") {
      const accessToken = response.result.accessToken;
      setItem(KEY_ACCESS_TOKEN, accessToken);
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      return axios(originalRequest);
    }
  }
  return Promise.reject(error);
});
export default axiosClient;
