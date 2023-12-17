"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql

type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;
