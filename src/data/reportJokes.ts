export interface JokeReport {
  joke: string;

  rating: number | null;
  
  date: string;
}

export const reportJokes: JokeReport[] = [];
