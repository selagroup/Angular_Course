import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LoggerService} from "../../core/logger.service";
import {BetterLoggerService} from "../../core/better-logger.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[{provide: LoggerService, useClass: BetterLoggerService}]
})
export class MovieDetailsComponent implements OnInit,OnChanges {

  @Input()
  private movie:Movie;

  @Output()
  private onMovieUpdated = new EventEmitter<Movie>();

  @Output()
  private onMovieChanged = new EventEmitter<Movie>();

  private movieEdit: Movie;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('Movie details init');

  }

  handleMovieChange(value){
    this.onMovieChanged.emit(this.movieEdit);
  }
  ngOnChanges(changes: SimpleChanges){

    if(changes.hasOwnProperty('movie')) {
      this.movieEdit = Object.assign({},this.movie);
    }
  }

  saveMovie(){
    this.onMovieUpdated.emit(this.movieEdit);
  }



}
