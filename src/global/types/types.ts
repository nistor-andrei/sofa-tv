export interface ITrendingMovieRecord {
  page: number;
  results: ITrendingMovie[];
  total_pages: number;
  total_results: number;
}

export interface ITrendingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieCardProps {
  rating: string;
  imageUrl: string;
  name: string;
  year: string;
}
