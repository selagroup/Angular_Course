import { Injectable } from '@angular/core';
import {Movie} from "../models/movie.model";
import {MOVIES} from "../mocks/movies.mock";

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Movie[]{
    return MOVIES;
  }

}
