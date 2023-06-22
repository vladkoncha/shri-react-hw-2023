type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Movie = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: "fantasy";
  id: string;
  rating: Rating;
  director: string;
  reviewIds: string[];
};
