import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { User } from "./user";

const app = express();
const httpserver = http.createServer(app);

// typeDefs schema
const typeDefs = `
  ${User.typeDefs}
`;

// resolvers
const resolvers = {
  Query: {
    ...User.resolvers.Query,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
