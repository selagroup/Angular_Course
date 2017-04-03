/**
 * Created by nirnoy on 18/10/2016.
 */
// within the html first div: <movieNew (onMovieAdded)="onNewMovie($event)" ></movieNew>

import {Component, OnInit} from "@angular/core";
import {MoviesPromiseService} from "../common/services/movies.promise.service";
import Movie from "../common/models/movie.model";
import {Router} from "@angular/router";
@Component({
  selector:'movies',
  template:`
    <section>
      <div>
          <!--<movie-form (onMovieAdded)="onNewMovie($event)"></movie-form>-->
          <movie-new (onMovieAdded)="onNewMovie($event)" ></movie-new>
      </div>
      <moviesList (onMovieSelected)="onMovieSelected($event)" [movies]="moviesList | releaseYearFilter:yearFilter" ></moviesList>
    </section>
    <section>
        <movieSearch></movieSearch>
    </section>  
  `

})
export class MoviesComponent implements OnInit {

  private moviesList:any[]=[];
  private selectedMovie:Movie;
  private errorMessage:String;
  private showNewMovie:boolean;
  private yearFilter:string

  constructor(private moviesService:MoviesPromiseService, private router:Router){}

  ngOnInit(){

    this.moviesService.getMovies().then(
      movies => { this.moviesList=movies}
    );

    console.log('app init');
  }

  onSaveMovie(value){
    this.selectedMovie.title=value;
  }
  onMovieSelected(_movie:Movie){
    this.router.navigate(['/movies',_movie.id,'edit']);
  }

  onNewMovie(_movie:Movie){
    this.moviesService.create(_movie)
      .then(
        movie=>this.moviesList=[...this.moviesList,movie],
        error=> this.errorMessage=error
      );
  }

}
