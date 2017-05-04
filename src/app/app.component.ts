import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";
import {MOVIES} from "./mocks/movies.mock";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{

  private movies: Movie[];
  private selectedMovie:Movie;


  constructor(){
    this.movies = MOVIES;
  }

  ngOnInit(){
    console.log('app init');
  }

  onSaveMovie(value){
    this.selectedMovie.title=value;
  }
  onMovieSelected(_movie:Movie){
    this.selectedMovie=_movie;
  }


}
