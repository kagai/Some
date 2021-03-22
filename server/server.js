"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var resolver_1 = __importDefault(require("./resolvers/resolver"));
var index_1 = __importDefault(require("./schemas/index"));
var server = new apollo_server_1.ApolloServer({
    resolvers: resolver_1.default,
    typeDefs: index_1.default
});
server.listen()
    .then(function (serverInfo) { return console.log("Server ready at " + serverInfo.url); });
