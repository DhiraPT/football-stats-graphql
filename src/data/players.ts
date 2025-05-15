export interface Player {
  id: string;
  name: string;
  age: number;
  nationality: string;
  position: "GK" | "DEF" | "MID" | "FWD" | null;
  teamId: string | null;
  jerseyNumber: number | null;
  stats: {
    goals: number;
    assists: number;
    appearances: number;
    yellowCards: number;
    redCards: number;
  };
}

export const players: Player[] = [
  {
    id: "1",
    name: "Lionel Messi",
    age: 36,
    nationality: "Argentina",
    position: "FWD",
    teamId: "1", // Inter Miami
    jerseyNumber: 10,
    stats: {
      goals: 25,
      assists: 15,
      appearances: 30,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: "2",
    name: "Kevin De Bruyne",
    age: 32,
    nationality: "Belgium",
    position: "MID",
    teamId: "2", // Man City
    jerseyNumber: 17,
    stats: {
      goals: 10,
      assists: 20,
      appearances: 28,
      yellowCards: 3,
      redCards: 0,
    },
  },
  // More players...
];
