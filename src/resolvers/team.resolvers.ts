import { db, Player, Team, League } from "../data/index.js";

export const teamResolvers = {
  Team: {
    players: (parent: Team): Player[] => {
      return db.players.filter((p: Player) => p.teamId === parent.id);
    },
    league: (parent: Team): League | undefined => {
      return db.leagues.find((l: League) => l.id === parent.leagueId);
    },
  },
};
