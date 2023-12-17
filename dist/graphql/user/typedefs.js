"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql

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
