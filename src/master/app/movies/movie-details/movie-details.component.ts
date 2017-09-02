import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggerService} from "../../core/logger.service";
import {BetterLoggerService} from "../../core/better-logger.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[{provide: LoggerService, useClass: BetterLoggerService}]
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  private movie;

  @Output()
  private onMovieUpdated = new EventEmitter<Movie>()

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('Movie details init');
  }

  saveMovie(){
    this.onMovieUpdated.emit(this.movie);
  }



}
