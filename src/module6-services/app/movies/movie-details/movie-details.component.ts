import {Component, Input, OnInit} from '@angular/core';
import {LoggerService} from "../../core/logger.service";
import {BetterLoggerService} from "../../core/better-logger.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[{provide: LoggerService, useClass: BetterLoggerService}]
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  private movie;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('Movie details init');
  }

}
