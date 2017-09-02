import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Movie} from "../models/movie.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MoviesService {

  private  moviesAPIUrl='http://localhost:3000/movies';

  constructor(private http: HttpClient) {

  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesAPIUrl)
      .catch(this.handleError);
  }

  getMovie(id:number): Observable<Movie>{
    let url = `${this.moviesAPIUrl}/${id}`
    return this.http.get<Movie>(url)
      .catch(this.handleError);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<{id:number}>(this.moviesAPIUrl, movie)
      .switchMap((res:any)=> this.getMovie(res.id))
      .catch(this.handleError);
  }

  private handleError(error:any) {

    let msg = error.message ? error.message : 'Unknown Error';
    console.error(msg);
    return Observable.throw(msg);

  }

}
