import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {LoggerService} from "../../core/logger.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers:[LoggerService]
})
export class MoviesListComponent implements OnInit {

  @Input()
  private movies: Movie[];

  private selectedMovie: Movie;

  @Output()
  private movieSelected: EventEmitter<Movie>;

  constructor(private logger: LoggerService) {
    this.logger.prefix = '&&';
    this.movieSelected = new EventEmitter<Movie>();
  }

  onMovieSelected(_movie: Movie) {
    this.selectedMovie=_movie;
    this.movieSelected.emit(_movie);
  }

  ngOnInit() {
    this.logger.log('Movies list init...');
  }

}
