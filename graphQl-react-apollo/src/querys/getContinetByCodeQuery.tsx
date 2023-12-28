import { gql } from '@apollo/client';

export const CONTINENT_BY_CODE = gql`
query ($code: ID!){
  continent(code: $code) {
    name
  }
}`;
