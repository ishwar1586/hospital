import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("hospital_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (typeof FormData !== "undefined" && config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else if (config.data && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("hospital_token");
      localStorage.removeItem("hospital_user");
      window.dispatchEvent(new CustomEvent("hospital:unauthorized"));
    }
    return Promise.reject(error);
  },
);

export const clinicalApi = {
  list: (type, params = {}) => api.get(`/clinical/${type}`, { params }),
  get: (type, id) => api.get(`/clinical/${type}/${id}`),
  create: (type, data) => api.post(`/clinical/${type}`, data),
  update: (type, id, data) => api.patch(`/clinical/${type}/${id}`, data),
  transition: (type, id, status, extra = {}) => api.post(`/clinical/${type}/${id}/transition`, { status, ...extra }),
  uploadImage: (file) => {
    const body = new FormData();
    body.append("image", file);
    return api.post("/uploads/image", body);
  },
};

export default api;
