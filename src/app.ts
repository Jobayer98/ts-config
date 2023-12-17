import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql";

async function createServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors(), express.json());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Graphql is running on http://localhost:${PORT}`);
  });
}

createServer();
