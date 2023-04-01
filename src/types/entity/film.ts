export interface Film {
  id: string;

  title: string;
  slug: string;
  synopsis: string;
  duration: number;
  genre: string;
  produer: string;
  director: string;
  writer: string;
  production: string;
  cast: string;
  trailer: string;
  image: string;
  status: string;

  createdAt: Date;
  updatedAt: Date;
}
