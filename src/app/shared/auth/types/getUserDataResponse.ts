import { UserDetails } from "../../types/userDetails.interface"

export interface GetUserDataResponse {
  kind: string
  users: UserDetails[]
};
