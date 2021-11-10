import { UserType } from "../authentication/user-type.enum";
export interface GetEnumeratorDto {
  emailAddress: string,
  firstName: string,
  lastName: string,
  password: string,
  primaryPhone: string,
  role: UserType,
  secondaryPhone: string,
  __v: string | number,
  _id: string,
}
