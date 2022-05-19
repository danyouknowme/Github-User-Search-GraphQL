import { gql } from '@apollo/client';

export const USER_QUERY = gql`
query User($username: String!) { 
    user(login: $username) { 
      name 
      email 
      company 
      bio 
      followers { 
        totalCount
      } 
      following { 
        totalCount 
      } repositories(last: 50, isFork: false) { nodes { name url stargazerCount primaryLanguage { id name } } } } 
  }
`;

