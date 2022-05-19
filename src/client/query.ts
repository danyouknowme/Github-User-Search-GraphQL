import { gql } from '@apollo/client';

export const USER_QUERY = gql`
query User($username: String!) { 
    user(login: $username) { 
      name
      email
      company
      bio
      avatarUrl
      followers { 
        totalCount
      } 
      following { 
        totalCount 
      } repositories(last: 20, isFork: false) {
        nodes { 
          name 
          url
          description
          primaryLanguage { 
            id 
            name 
          } 
        } 
      } 
    } 
  }
`;

