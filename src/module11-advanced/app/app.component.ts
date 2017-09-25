import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";
import {MoviesService} from "./core/movies.service";
import {LoggerService} from "./core/logger.service";
import {FavoritesService} from "./core/favorites.service";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{

  movies: Movie[];
  selectedMovie: Movie;
  errorMessage:String;
  favoritesCount:number;


  constructor(private moviesService: MoviesService, private logger: LoggerService,private favorites: FavoritesService){

  }

  ngOnInit(){
    this.logger.log('app init');
    this.moviesService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });

    this.favorites.getFavoritesStream()
      .subscribe((data)=>{
        this.favoritesCount = data.length;
      })

  }



}
