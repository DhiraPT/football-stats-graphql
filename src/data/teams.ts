export interface Team {
  id: string;
  name: string;
  founded: number;
  stadium: string;
  leagueId: string;
}

export const teams: Team[] = [
  {
    id: "1",
    name: "Inter Miami",
    founded: 2018,
    stadium: "DRV PNK Stadium",
    leagueId: "1", // MLS
  },
  {
    id: "2",
    name: "Manchester City",
    founded: 1880,
    stadium: "Etihad Stadium",
    leagueId: "2", // Premier League
  },
  // More teams...
];
