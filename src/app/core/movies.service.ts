import { Injectable } from '@angular/core';
import {Movie} from "../models/movie.model";
import {MOVIES} from "../mocks/movies.mock";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Http, Response} from "@angular/http";

@Injectable()
export class MoviesService {

  private  moviesAPIUrl='app/movies';

  constructor(private http:Http) {

  }

  getMovies(): Observable<Movie[]>{
    return this.http.get(this.moviesAPIUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(movie:Movie): Observable<Movie> {
    return this.http.post(this.moviesAPIUrl,JSON.stringify(movie))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) : any{
    let res = response.json();
    return res.data || [];
  }

  private handleError(error:any){

    let msg = error.message ? error.message : 'Unknown Error';
    console.error(msg);
    return Observable.throw(msg);

  }

}
