import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { User } from "./user";

const app = express();
const httpserver = http.createServer(app);

const server = new ApolloServer({
  typeDefs: `
    ${User.typeDefs}
    `,

  resolvers: {
    Query: {
      ...User.resolvers.Query,
    },
  },
});

export default server;
