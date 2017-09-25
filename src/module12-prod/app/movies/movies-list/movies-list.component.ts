import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {LoggerService} from "../../core/logger.service";
import {MovieListItem} from "../../models/movieListItem.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers:[LoggerService]
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: MovieListItem[];

  selectedMovie: Movie;

  @Output()
  movieSelected: EventEmitter<Movie>;

  @Output()
  toggleFavorite: EventEmitter<Movie>;

  constructor(private logger: LoggerService) {
    this.logger.prefix = '&&';
    this.movieSelected = new EventEmitter<Movie>();
    this.toggleFavorite = new EventEmitter<Movie>();
  }

  onMovieSelected(_movie: Movie) {
    this.selectedMovie=_movie;
    this.movieSelected.emit(_movie);
  }

  ngOnInit() {
    this.logger.log('Movies list init...');

    //example for pure/impure pipes
    // setTimeout(()=>{
    //   this.movies.push(new Movie(Math.random(),'Mivtza Savta',1999,'https://images-na.ssl-images-amazon.com/images/M/MV5BZTRiMjk0MjYtOGUxMy00MjE3LWI2ZWQtZTNiYWRmNTU0OTEwXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_.jpg'));
    // },3000);

    //when a pipe is pure for sorting array we need to provide a new array
    setTimeout(()=>{
      this.movies=[...this.movies,new MovieListItem(Math.random(),'Mivtza Savta',1999,'https://images-na.ssl-images-amazon.com/images/M/MV5BZTRiMjk0MjYtOGUxMy00MjE3LWI2ZWQtZTNiYWRmNTU0OTEwXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_.jpg')];
    },3000);
  }

  favoriteClick(event,movie){
    this.toggleFavorite.emit(movie);
    event.stopPropagation();
  }

}
