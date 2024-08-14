export const apiKey: string = import.meta.env.VITE_API_KEY;
export const apiToken: string = import.meta.env.VITE_API_TOKEN;
const movieUrl: string = import.meta.env.VITE_MOVIE_URL;

//!movie
export const trending = movieUrl + "trending/movie/week";
export const upcoming = movieUrl + "movie/upcoming";
export const popular = movieUrl + "movie/popular";
export const top_rated_movies = movieUrl + "movie/top_rated";
export const now_playing = movieUrl + "movie/now_playing";

//!tv
export const trandingShows = movieUrl + "trending/tv/week";
export const popularShows = movieUrl + "tv/popular";
export const top_rated_shows = movieUrl + "tv/top_rated";
export const airing_today = movieUrl + "tv/airing_today";
