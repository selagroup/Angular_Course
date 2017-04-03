import { Component, OnInit } from '@angular/core';
import Movie from '../common/models/movie.model';
import { MoviesService } from '../common/services/movies.service';
import { Router } from '@angular/router';


@Component({
    selector: 'moviesCatalog',
    template: `
        <section>
          <div>
              <movieNew (onMovieAdded)="onNewMovie($event)" ></movieNew>
          </div>
          
          <moviesList (onMovieSelected)="onMovieSelected($event)" [movies]="moviesList" ></moviesList>
        </section>
        <section>
          <movieSearch></movieSearch>
        </section>
    `
})
export class MoviesCatalogComponent implements OnInit  {

  private moviesList:any[]=[];
  private selectedMovie:Movie;
  private errorMessage:String;
  private currentFilter: String;

  constructor(private moviesService:MoviesService,
              private router: Router){

  }

  ngOnInit(){

    this.moviesService.getMovies().subscribe(
      movies => { this.moviesList=movies}
    );

    console.log('Movies Catalog init');
  }

  onMovieSelected(_movie:Movie){
    this.router.navigate(['/movies',_movie.id,'edit']);
  }

  onNewMovie(_movie:Movie){
      this.moviesService.create(_movie)
          .subscribe(
            movie=> this.moviesList.push(movie),
            error=> this.errorMessage=error
          )
  }

}
