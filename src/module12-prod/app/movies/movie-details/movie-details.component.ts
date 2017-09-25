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
  movie: Movie;

  @Output()
   onMovieUpdated = new EventEmitter<Movie>();

  @Output()
  onMovieChanged = new EventEmitter<Movie>();

  movieEdit: Movie;

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
      if(this.movie)
        this.releaseDate = this.dateToInputString(this.movie.releaseDate);
    }

  }

  saveMovie(){
    this.onMovieUpdated.emit(this.movieEdit);
  }

  private releaseDate:string;


  @Input()
  set ReleaseDate(value: Date | string) {

    this.releaseDate = this.dateToInputString(value);
  }

  dateToInputString(value : Date | string){

   if(typeof value === 'string'){
      value = new Date(value);
    }
    return value ? `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}` : '';

  }





}
