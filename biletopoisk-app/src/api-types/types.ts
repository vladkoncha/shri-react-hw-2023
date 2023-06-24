type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const genreMap = {
  fantasy: "Фэнтези",
  horror: "Ужасы",
  action: "Боевик",
  comedy: "Комедия",
};

export type Movie = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: keyof typeof genreMap;
  id: string;
  rating: Rating;
  director: string;
  reviewIds: string[];
};

export type Cinema = {
  id: string;
  name: string;
  movieIds: string[];
};
