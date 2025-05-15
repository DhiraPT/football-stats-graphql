export interface League {
  id: string;
  name: string;
  country: string;
}

export const leagues: League[] = [
  {
    id: "1",
    name: "Major League Soccer",
    country: "USA",
  },
  {
    id: "2",
    name: "Premier League",
    country: "England",
  },
  // More leagues...
];
