import { gql } from '@apollo/client';

export const COUNTRY_BY_CODE = gql`
  query ($code: String!){
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      languages {
        name
        native
        rtl
      }
      emojiU
      emoji
      states {
        code
        name
      }
      currency
    }
}`; 
