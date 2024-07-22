import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./AuthProvider";

export const axiosPrivate = axios.create({
//   baseURL: 'https://blogapplicatonbackend.onrender.com',
  baseURL: 'http://localhost:8000',
  headers: {
    "content-Type": "application/json",
  },
  withCredentials: true,
});

function useAxiosPrivate() {

  const { auth } = useContext(AuthContext);
  console.log(auth);

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => {
        console.log(error);
        Promise.reject(error)
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
    };
  }, []);
  return axiosPrivate;
}

export default useAxiosPrivate;

