export interface Movie {
  genreIds: string[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  title: string;
}

export interface MovieRaw {
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
}

export interface MovieDetails {
  adult: boolean,
  genres: {id: number, gender: string}[]
  id: number
  original_title:string
  overview:string
  popularity: number
  original_language: string;
  poster_path:string
  release_date:string
  runtime:number 
  spoken_languages: {name: string}[]
  status:string
  title:string
}