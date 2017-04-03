import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import Movie from '../models/movie.model';
import {MoviesPromiseService} from "./movies.promise.service";

@Injectable()
export class MovieDetailsResolve implements Resolve<Movie> {

    constructor(private movieService: MoviesPromiseService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Movie> | Promise<Movie>{
         let id= +route.params['id'];
         return this.movieService.getMovie(id);
    }

}
