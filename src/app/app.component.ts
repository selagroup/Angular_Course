import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";
import {MoviesService} from "./core/movies.service";
import {LoggerService} from "./core/logger.service";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{

  private movies: Movie[];
  private selectedMovie: Movie;
  private errorMessage:String;


  constructor(private moviesService: MoviesService, private logger: LoggerService){

  }

  ngOnInit(){
    this.logger.log('app init');
    this.moviesService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });



  }

  onSaveMovie(value){
    this.selectedMovie.title = value;
  }
  onMovieSelected(_movie: Movie){
    this.selectedMovie = _movie;
  }

  onNewMovie(_movie:Movie){
    this.moviesService.create(_movie)
      .subscribe(
        movie=> this.movies.push(movie),
        error=> this.errorMessage=error
      )
  }

}
