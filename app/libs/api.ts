import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_URL;

// Headers
axios.defaults.headers.common.Accept = "application/json";

/**
 * Request Interceptor
 */
axios.interceptors.request.use(
  async (inputConfig) => {
    const config = inputConfig;

    // Check for and add the stored Auth Token to the header request
    let token;
    try {
      token = localStorage.getItem("@Auth:token");
    } catch (error) {
      /* Nothing */
    }
    if (token) {
      const newToken = token.replace(/['"]+/g, ""); //because token has double quotes
      config.headers.common.Authorization = `Bearer ${newToken}`;
      // config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    throw error;
  }
);

export default axios;
