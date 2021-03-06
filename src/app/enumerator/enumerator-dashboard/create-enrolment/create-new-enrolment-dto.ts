export interface CreateNewEnrolmentDto {
  firstName: string,
  lastName: string,
  emailAddress?: string,
  bankName: string,
  accountNumber: string,
  NIN?: string,
  BVN: string,
  occupation: string,
  state: string,
  lga: string,
  city: string,
  address: string,
  gender: string,
  primaryPhoneNumber: string,
  secondaryPhoneNumber?: string,
  enrolledBy: string;
  VRN?: string
}
