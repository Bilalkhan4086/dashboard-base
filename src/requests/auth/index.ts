import { basicHeaders, createReqObject } from "../apiClient/utils";

export const getLoginReq = ({ data }: any) => {
  return createReqObject("/auth/login", "POST", basicHeaders(), data);
};
export const getRegisterReq = ({ data }: any) => {
  return createReqObject("/auth/register", "POST", basicHeaders(), data);
};

export const getRefreshReq = ({ refreshToken }: any) => {
  return createReqObject("/auth/register", "POST", basicHeaders(), {
    refreshToken,
  });
};
