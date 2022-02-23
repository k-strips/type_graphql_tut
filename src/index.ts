import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../prisma/generated/type-graphql";
import express from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const http = require("http");
const PORT = process.env.PORT || 4000;

async function StartServer() {
  const schema = await buildSchema({ resolvers, validate: false });
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      return {
        ...req,
        prisma,
      };
    },
  });

  const app = express();
  const httpServer = http.createServer(app);

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen(PORT, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );

  //   const { url } = await server.listen(PORT);
  //   console.log(`Server is running, GraphQL Playground available at ${url}`);
}

StartServer();
