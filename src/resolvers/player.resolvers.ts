import { db, Player, Team } from "../data/index.js";

export const playerResolvers = {
  Player: {
    team: (parent: Player): Team | undefined => {
      return db.teams.find((t: Team) => t.id === parent.teamId);
    },
  },
};
