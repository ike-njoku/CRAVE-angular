import { UserType } from "./user-type.enum";

export interface ServerSessionDetailDto {
  exp: number,
  firstName: string,
  iat: number,
  role: UserType
  userName: string,
}
