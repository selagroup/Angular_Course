import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";
import {MoviesService} from "./core/movies.service";
import {LoggerService} from "./core/logger.service";
import {FavoritesService} from "./core/favorites.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

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
  htmlSnippet=`<script>alert('0wned')</script>`;
  dangerousVideoUrl='https://www.youtube.com/embed/cChkPnpN15c';
  trustedVideoUrl:SafeResourceUrl;


  constructor(
              private sanitizer: DomSanitizer,
              private moviesService: MoviesService,
              private logger: LoggerService,
              private favorites: FavoritesService){
      this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
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
