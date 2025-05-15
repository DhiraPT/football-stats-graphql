export const playerTypeDefs = `#graphql
    type Player {
        id: ID!
        name: String!
        age: Int!
        nationality: String!
        position: String
        team: Team
        jerseyNumber: Int
        stats: PlayerStats!
    }

    type PlayerStats {
        goals: Int!
        assists: Int!
        appearances: Int!
        yellowCards: Int!
        redCards: Int!
    }

    input AddPlayerInput {
        name: String!
        age: Int!
        nationality: String!
        position: String
        teamId: ID
        jerseyNumber: Int
        stats: AddPlayerStatsInput!
    }

    input AddPlayerStatsInput {
        goals: Int!
        assists: Int!
        appearances: Int!
        yellowCards: Int!
        redCards: Int!
    }

    input EditPlayerInput {
        name: String
        age: Int
        nationality: String
        position: String
        teamId: ID
        jerseyNumber: Int
        stats: EditPlayerStatsInput
    }

    input EditPlayerStatsInput {
        goals: Int
        assists: Int
        appearances: Int
        yellowCards: Int
        redCards: Int
    }
`;
