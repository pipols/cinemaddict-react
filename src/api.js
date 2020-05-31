import axios from "axios";

const TOKEN = `Basic er88shdng3jdzbdw`;

const createAPI = (onResponse) => {
  const api = axios.create({
    baseURL: `https://11.ecmascript.pages.academy/cinemaddict/`,
    timeout: 5000,
    // withCredentials: true,
    headers: { Authorization: TOKEN },
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const { response } = err;
    onResponse(response);

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
