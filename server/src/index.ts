import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./db/sequelize";
import dotenv from "dotenv";
import typeDefs from "./graphql/schmea";
import resolvers from "./graphql/resolver";
import cors from "cors";

dotenv.config();

const app: Application = express(); // Ensure this is explicitly typed
const port = 4002;
app.use(cookieParser());

app.use(
  cors({
    credentials: true,              // Allow cookies to be sent and received
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  // Ensure server is started before applying middleware
  await server.start();
  // Apply Apollo Server middleware to the express app
  server.applyMiddleware({ app });

  await sequelize.sync(); // Sync models with the database
  console.log("Database synced.");

  app.listen(port, () => {
    console.log(
      `Server running at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
