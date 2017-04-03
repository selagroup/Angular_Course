import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import Movie from '../common/models/movie.model';

@Component({
    selector: 'moviesList',
    styles:[`
    ul{
      padding:10px;
      list-style:none;
    }
    .list{
      margin:10px;
    }
    .list li img{
      width:80px;
      height:118px;
    }
    .movieItem{
        margin-bottom:10px;
        height: 118px;
        width:512px;
        background-color:#ffffff;
        border:solid 1px #e3e3e3;
        box-shadow:0 2px 5px rgba(0,0,0,0.4)
    }
    .movieItem .info{
       padding: 5px;
       line-height: 30px;
    }
    .movieItem .imgContainer{
      margin-right:10px;
      border-right:solid 1px black;
      padding:0;
      height:118px;  
    }
    .movieItem .info b{
      line-height:36px;
      font-size:24px;
    }
    .movieItem .info span{
      color:#b8b8b8;
      font-size:18px;
    }
    .movieItem.selected{
       background-color:#FFFADD;
    }
    `],
    template: `
    <div class="list pull-left">
        <ul>
            <li class="movieItem group" 
                [ngClass]="{selected:selectedMovie===movie}" 
                *ngFor="let movie of movies | sortByYear" (click)="onMovieClicked(movie)">
            <div>
                <div class="imgContainer pull-left">
                    <img [src]="movie.poster" />
                </div>
                <div class="info pull-left">
                    <b>{{movie.title | uppercase}}</b><br />
                    <span>Release Year  {{movie.year | yearsAgo }}</span><br/>
                    <span>Released on {{movie.releaseDate | date:'longDate'}}</span>
                </div>
            </div>
            </li>
        </ul>
    </div>
    `
})
export class MoviesListComponent implements OnInit {

    @Input()
    movies:any[];


    private selectedMovie:Movie;

    @Output()
    private onMovieSelected:EventEmitter<Movie>;

    constructor() {

        this.onMovieSelected=new EventEmitter<Movie>();
    }

 onMovieClicked(_movie:Movie){
     this.selectedMovie=_movie;
    this.onMovieSelected.emit(_movie);
  }

    ngOnInit() { }
}
