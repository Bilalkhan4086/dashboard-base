import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import {
  AuthResponsePayload,
  authState,
  InitializationPayload,
  setTokensPayload,
} from "./types";

const initialState: authState = {
  refreshToken: "",
  accessToken: "",
  isAuthenticatedUser: false,
  isInitialized: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<InitializationPayload>) => {
      Object.assign(state, { isInitialized: true, ...action.payload });
    },
    // use it to store response of login register and refresh if they all are same.
    setAuthResponse: (state, action: PayloadAction<AuthResponsePayload>) => {
      Object.assign(state, action?.payload);
    },
    setTokens: (state, action: PayloadAction<setTokensPayload>) => {
      Object.assign(state, action?.payload);
    },
  },
});

export const { initialize, setAuthResponse, setTokens } = authSlice.actions;

export default authSlice.reducer;
