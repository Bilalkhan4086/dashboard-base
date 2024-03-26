import axiosInterceptorInstance from "./apiClient";

const apiClient = (url: string, method: string, data: any, headers: any) => {
  const config = {
    url,
    method,
    data,
    headers,
  };

  return new Promise(function (resolve, reject) {
    axiosInterceptorInstance(config)
      .then((res) => resolve(res))
      .catch((err: any) => {
        reject(err);
      });
  });
};

export default apiClient;
