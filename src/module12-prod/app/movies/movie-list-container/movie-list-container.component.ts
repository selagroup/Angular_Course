import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie.model";
import {MoviesService} from "../../core/movies.service";
import {LoggerService} from "../../core/logger.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FavoritesService} from "../../core/favorites.service";
import {MovieListItem} from "../../models/movieListItem.model";

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.css']
})
export class MovieListContainerComponent implements OnInit {

   movies: Movie[];
  movies$:Observable<MovieListItem[]>;
  selectedMovie: Movie;
  errorMessage: string;


  constructor(private moviesService: MoviesService,
              private logger: LoggerService,
              private router: Router,
              private favorites: FavoritesService){

  }

  ngOnInit(){
    this.logger.log('app init');
    this.movies$=Observable.combineLatest<MovieListItem[]>(
        this.moviesService.getMovies(),
        this.favorites.getFavoritesStream(),
       (movies:Movie[],favorites: Movie[])=>{
          return  movies.map((item)=>{
            return Object.assign({},item,{isFavorite: favorites.findIndex(f=> f.id === item.id)>=0 })
          });
      });
  }

  onSaveMovie(value){
    this.selectedMovie.title = value;
  }
  onMovieSelected(_movie: Movie){
    this.router.navigate(['/movies', _movie.id]);
  }

  toggleFavorite(movie: MovieListItem){
    if(!movie.isFavorite){
      return this.favorites.AddFavorite(movie);
    }

    this.favorites.removeFavorite(movie);
  }



}
