import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MoviesService} from "../../core/movies.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-details-container',
  templateUrl: './movie-details-container.component.html',
  styleUrls: ['./movie-details-container.component.css']
})
export class MovieDetailsContainerComponent implements OnInit {

  private selectedMovie: Movie;

  private errorMessage: string;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private router:Router) {

  }

  ngOnInit() {
    this.route.params.forEach( (params:Params) => {
      let id = params['id'];
      this.movieService.getMovie(id)
        .subscribe(
          movie => this.selectedMovie = movie,
          error => this.errorMessage = error);
    });
  }

  saveMovie(movie){
    this.movieService.saveMovie(this.selectedMovie)
      .subscribe(() => this.goToList());
  }

  goToList(){
    this.router.navigate(['/movies']);
  }



}
