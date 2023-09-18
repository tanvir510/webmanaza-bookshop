// Library import
import Axios from "axios";

// File import
// import { store } from 'store';

const customOrigin = "bookshop.webmanza.com";

export const http = Axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Origin: customOrigin,
  },
});

// Request interceptor
http.interceptors.request.use(async (request: any) => {
  const authToken = window.localStorage.getItem("token");

  if (authToken) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  return request;
});

// Response interceptor
http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response) {
      /**
       * In case of
       * - Other responses
       * - Returns message from server explicitly
       */
      if (error.response.status === 401) {
        // Clear state and logout from system
        window.localStorage.removeItem("auth_token");
      } else if (error.response.status === 500) {
        // TODO: Display service not available

        return Promise.reject("");
      } else {
        return Promise.reject(error.response);
      }
    }

    return Promise.reject(error);
  }
);
