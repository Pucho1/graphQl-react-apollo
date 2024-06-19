import { gql } from '@apollo/client';

export const CREATE_PERSON = gql`
  mutation create_person($name: string!, $street: string!, $city: string!, $phone: string) {
    addPerson(
      $name: String!,
      $street: String!,
      $city: String!,
      $phone: String
    ) {
      phone
      name
      addres{
        cuty
        street
      }
    }
  }
`
