export const basicHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
export const formDataHeaders = () => {
  return {
    "Content-Type": "multipart/form-data",
  };
};

export const createReqObject = (
  url: string,
  method: string,
  header?: any,
  data: any = {}
) => {
  return {
    url: url,
    headers: { ...basicHeaders(), ...header },
    data: JSON.stringify(data),
    method,
  };
};

export const createReqObjectForFormData = (
  url: string,
  method: string,
  header?: any,
  data: any = {}
) => {
  return {
    url,
    headers: { ...formDataHeaders(), ...header },
    data,
    method,
  };
};
