import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{

  private movie: Movie;


  constructor(){
    this.movie = new Movie(3,'Toy Story');
  }

  ngOnInit(){
    console.log('app init');
  }

  onSaveMovie(value){
    this.movie.title=value;
  }


}
