import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input()
  private movies: Movie[];

  private selectedMovie: Movie;

  @Output()
  private movieSelected: EventEmitter<Movie>;

  constructor() {

    this.movieSelected = new EventEmitter<Movie>();
  }

  onMovieSelected(_movie: Movie) {
    this.selectedMovie=_movie;
    this.movieSelected.emit(_movie);
  }

  ngOnInit() { }

}
