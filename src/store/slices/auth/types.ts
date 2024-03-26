export interface authState {
  refreshToken: string;
  accessToken: string;
  isAuthenticatedUser: boolean;
  isInitialized: boolean;
  user: any;
}

export interface InitializationPayload {
  isAuthenticatedUser: boolean;
  user: any;
}

export interface AuthResponsePayload {
  refreshToken?: string;
  accessToken?: string;
  isAuthenticatedUser: boolean;
  user: any;
}

export interface setTokensPayload {
  refreshToken: string;
  accessToken: string;
}
