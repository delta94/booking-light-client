import { gql } from "@apollo/client";

export const F_COLLECTION_DATA_INTERFACE =gql`
    fragment FcollectionDataInterface on CollectionDataInterface {
        _id
        createdAt
        updatedAt
        isDeleted
    }
`

export const F_ZONE_INFO = gql`
    fragment FzoneInfo on ZoneInfo {
        timezone
        offset
        callingCode
        alpha2Code
    }
`

export const F_USER = gql`
  fragment Fuser on User {
    _id
    createdAt
    updatedAt
    isDeleted
    name
    email
    phoneNumber
    profileImage
    isVerifiedPhoneNumber
    isVerifiedEmail
    role
    company
    zoneinfo {
        ...FzoneInfo
    }
    smsKey
    ...FcollectionDataInterface
  }
  ${F_ZONE_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`;

export const SIGNUP = gql`
  mutation signUp(
      $name: String!,
      $email: String!,
      $phoneNumber: String!,
      $password: String!,
      $company: String
    ) {
    SignUp(
        name: $name
        email: $email
        phoneNumber: $phoneNumber
        password: $password
        company: $company
      ) {
      ok
      error {
        code
        message
        details
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USER}
`;