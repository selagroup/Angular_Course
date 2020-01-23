import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {MoviesService} from "../../core/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  private newMovie:Movie;

  @Output()
  private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private moviesService:MoviesService,private router:Router) { }

  ngOnInit() {
    this.newMovie=new Movie();
  }

  onSubmit(){

      this.moviesService.create(this.newMovie)
        .subscribe(
          movie => this.router.navigate(['movies', movie.id]))

  }
}
