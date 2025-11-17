import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
};

export default function createApi(baseURL) {
  const instance = axios.create({
    baseURL,
    ...commonConfig,
  });
}
