"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const sequelize_1 = __importDefault(require("./db/sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
const schmea_1 = __importDefault(require("./graphql/schmea"));
const resolver_1 = __importDefault(require("./graphql/resolver"));
dotenv_1.default.config();
const app = (0, express_1.default)(); // Ensure this is explicitly typed
const port = 4001;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schmea_1.default,
    resolvers: resolver_1.default,
});
(async () => {
    await server.start();
    server.applyMiddleware({ app });
    await sequelize_1.default.sync(); // Sync models with the database
    console.log("Database synced.");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
    });
})();
