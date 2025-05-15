import { db, Team, League } from "../data/index.js";

export const leagueResolvers = {
  League: {
    teams: (parent: League): Team[] => {
      return db.teams.filter((t: Team) => t.leagueId === parent.id);
    },
  },
};
