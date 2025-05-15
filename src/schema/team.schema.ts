export const teamTypeDefs = `#graphql
    type Team {
        id: ID!
        name: String!
        founded: Int!
        stadium: String!
        league: League!
        players: [Player!]!
    }
`;
