// src/services/authApi.js
import apiClient from "./apiClient";

const AuthApi = {
  register: (payload) => {
    // payload: { email, password, fullName, role }
    return apiClient.post("/Auth/register", payload);
  },

  login: (payload) => {
    // payload: { email, password }
    return apiClient.post("/Auth/login", payload);
  },
};

export default AuthApi;
