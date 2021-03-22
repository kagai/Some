const { gql } = require('apollo-server');

const typeDefs = gql `
    type category {
        categories: [String]
        created_at: String
        icon_url: String
        id: String
        updated_at: String
        url: String
        value: String
    }
    type Query {
        categories: [String]
        category(catagory: String): category
    }
`;

export default typeDefs;