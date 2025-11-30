// src/services/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://determined-hermann.103-28-36-75.plesk.page/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // nếu backend dùng cookie thì bật true
});

// optional: interceptor log lỗi
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR:", err.response || err.message);
    throw err;
  }
);

export default apiClient;
