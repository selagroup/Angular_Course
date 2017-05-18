import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  private newMovie:Movie;

  @Output()
  private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
    this.newMovie=new Movie();
  }

  onSubmit(){
    this.onMovieAdded.emit(this.newMovie);
  }
}
