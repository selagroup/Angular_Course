import {Observable} from "rxjs/Rx";
import Movie from "../models/movie.model";

export interface IMovieService {

  getMovies(): Observable<Movie[]> | Promise<Movie[]>;

  create(movie:Movie): Observable<Movie>  | Promise<Movie>;
}
