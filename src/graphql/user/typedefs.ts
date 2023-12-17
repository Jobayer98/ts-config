export const typedefs = `#graphql

    type Query {
        hello: String    
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String
        email: String!
        profileImageURL: String
    }
  `;
