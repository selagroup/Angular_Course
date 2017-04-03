import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {IMovieService} from "./IMovieService";

@Injectable()
export class MoviesPromiseService implements IMovieService {

  private  moviesAPIUrl='app/movies';

  constructor(private http:Http) {

  }

  getMovies(): Promise<Movie[]>{
    return this.http.get(this.moviesAPIUrl)
      .toPromise()
      .then(response =>  {return this.extractData(response) as Movie[]} )
      .catch(this.handleError);
  }

  create(movie:Movie): Promise<Movie>{
    return this.http.post(this.moviesAPIUrl,JSON.stringify(movie))
      .toPromise()
      .then(response =>  {return this.extractData(response) as Movie} )
      .catch(this.handleError);
  }

  getMovie(id): Promise<Movie>{
    let url = `${this.moviesAPIUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>  {return this.extractData(response) as Movie} )
      .catch(this.handleError);
  }

  private extractData(response: Response) : any{
    let res = response.json();
    return res.data || [];
  }

  private handleError(error:any){

    let msg = error.message ? error.message : 'Unknown Error';
    console.error(msg);
    return msg;

  }

}
