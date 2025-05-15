export const leagueTypeDefs = `#graphql
    type League {
        id: ID!
        name: String!
        country: String!
        teams: [Team!]!
    }
`;
