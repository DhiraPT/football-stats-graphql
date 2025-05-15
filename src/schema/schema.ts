import { mergeTypeDefs } from "@graphql-tools/merge";
import { playerTypeDefs } from "./player.schema.js";
import { teamTypeDefs } from "./team.schema.js";
import { leagueTypeDefs } from "./league.schema.js";

const baseTypeDefs = `#graphql
    type Query {
        players: [Player!]!
        teams: [Team!]!
        leagues: [League!]!
        player(id: ID!): Player
        team(id: ID!): Team
        league(id: ID!): League
    }

    type Mutation {
        addPlayer(player: AddPlayerInput!): Player!
        deletePlayer(id: ID!): [Player!]!
        editPlayer(id: ID!, editInput: EditPlayerInput): Player!
    }

    type Subscription {
        _: Boolean
    }
`;

export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  playerTypeDefs,
  teamTypeDefs,
  leagueTypeDefs,
]);
