import { ProviderUserInfo } from "./providerUserInfo.interface"

export interface ChangeUserDataResponse {
  localId: string
  email: string
  passwordHash: string
  emailVerified: boolean
  expiresIn: string
  idToken: string
  kind: string
  providerUserInfo: ProviderUserInfo[]
  refreshToken
};
