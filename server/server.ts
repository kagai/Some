
import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers/resolver';
import typeDefs from './schemas/index';

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen()
    .then((serverInfo: { url: any; }) => console.log(`Server ready at ${serverInfo.url}`));