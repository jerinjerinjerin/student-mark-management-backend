import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./db/sequelize";
import dotenv from "dotenv";
import typeDefs from "./graphql/schmea";
import resolvers from "./graphql/resolver";

dotenv.config();

const app: Application = express(); // Ensure this is explicitly typed
const port = 4001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  await sequelize.sync(); // Sync models with the database
  console.log("Database synced.");

  app.listen(port, () => {
    console.log(
      `Server running at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
