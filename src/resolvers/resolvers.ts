import { db, Player, Team, League } from "../data/index.js";
import { mergeResolvers } from "@graphql-tools/merge";
import { playerResolvers } from "./player.resolvers.js";
import { teamResolvers } from "./team.resolvers.js";
import { leagueResolvers } from "./league.resolvers.js";

export const baseResolvers = {
  Query: {
    players() {
      return db.players;
    },
    teams() {
      return db.teams;
    },
    leagues() {
      return db.leagues;
    },
    player(parent: unknown, args: { id: string }): Player | undefined {
      return db.players.find((p: Player) => p.id === args.id);
    },
    team(parent: unknown, args: { id: string }): Team | undefined {
      return db.teams.find((t: Team) => t.id === args.id);
    },
    league(parent: unknown, args: { id: string }): League | undefined {
      return db.leagues.find((l: League) => l.id === args.id);
    },
  },
  Mutation: {
    addPlayer(parent: unknown, args: { player: Omit<Player, "id"> }): Player {
      const newPlayer = { ...args.player, id: String(db.players.length + 1) };
      db.players.push(newPlayer);
      return newPlayer;
    },
    deletePlayer(parent: unknown, args: { id: string }): Player[] {
      const playerIndex = db.players.findIndex((p: Player) => p.id === args.id);
      if (playerIndex !== -1) {
        db.players.splice(playerIndex, 1);
      }
      return db.players;
    },
    editPlayer(
      parent: unknown,
      args: { id: string; editInput: Partial<Player> },
    ): Player | undefined {
      const player = db.players.find((p: Player) => p.id === args.id);
      if (player) {
        Object.assign(player, args.editInput);
        return player;
      }
      return undefined;
    },
  },
};

export const resolvers = mergeResolvers([
  baseResolvers,
  playerResolvers,
  teamResolvers,
  leagueResolvers,
]);
