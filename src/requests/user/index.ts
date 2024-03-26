import { createReqObject } from "../apiClient/utils";

export const getAllUserReq = () => {
  return createReqObject("/data", "GET");
};
