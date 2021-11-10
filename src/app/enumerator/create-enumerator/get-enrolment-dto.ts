export interface GetEnrolmentDTO {
  firstName: string,
  lastName: string,
  emailAddress: string,
  bankName: string,
  accountNumber: string,
  NIN: string,
  BVN: string,
  occupation: string,
  stateOfOrigin: string,
  LGA: string,
  city: string,
  address: string,
  gender: string,
  primaryPhoneNumber: string,
  secondaryPhoneNumber?: string,
  enrolledBy: string,
  VRN?: string
}
