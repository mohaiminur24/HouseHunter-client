import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const AxiosFetch = () => {
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "https://househunter-lake.vercel.app/",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (!token) {
        return;
      }
      if (token) {
        config.headers.authorize = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          localStorage.removeItem("user");
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  });

  return axiosSecure;
};

export default AxiosFetch;
