export const typeDefs = `
  #graphql
  type Channel { 
    id: ID!
    name: String!
  }
    
  type Query {
    Channels: [Channel]
  }
`;
