import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../common/services/movies.service';
import Movie from '../common/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'movieDetails',
    styles:[
      `    
        .error{
            color:red;
            font-weight: bold;
            padding: 5px;
            
        }
      `
    ],
    template:`
       <div class='details pull-left' *ngIf="selectedMovie" >
          <form #movieFormRef="ngForm" (ngSubmit)="saveMovie(movieFormRef.value)"  >
             <h3>{{selectedMovie.title}} Details</h3>
            <div>
              Id: {{selectedMovie.id}}
            </div>
            <div>
              <label >
                Title: <input name="title" type='text' #titleRef="ngModel" minlength="2" [(ngModel)]="editTitle" required />               
                  {{titleRef.valid}}
                  {{titleRef.errors | json }}
              </label>
              <div class="error" *ngIf="!titleRef.valid">
                  <div *ngIf="titleRef.errors?.required">This field is required</div>
                  <div *ngIf="titleRef.errors?.minlength">Title must at least {{titleRef.errors.minlength.requiredLength}} characters</div>
              </div>
            </div>   
             <div>
              <label >
                  Year: <input name="year" type='text' #yearRef="ngModel" [(ngModel)]="editYear" required pattern="^\\d+$"  />
                 <div class="error" *ngIf="!yearRef.valid">
                      <div *ngIf="yearRef.errors?.required">This Field is required</div>
                      <div *ngIf="yearRef.errors?.pattern">This Field numbers only</div>
                 </div>
              </label>
            </div>
            <button type="submit" >Submit</button>
            <button (click)="goToList()" >Back</button>      
          </form>    
      </div>  
    `
})
export class MovieDetailsComponent implements OnInit {

    selectedMovie:Movie;
    private errorMessage:string;

    editTitle:string;
    editYear:number;

    constructor(private movieService:MoviesService,
                private route: ActivatedRoute,
                private router:Router) {

    }

    ngOnInit() {
      // this.route.data.forEach( (data:{currentMovie:Movie}) => {
      //      this.selectedMovie=data.currentMovie;
      //      this.editTitle=data.currentMovie.title;
      //      this.editYear=data.currentMovie.year;
      // });
      this.route.parent.data.forEach( (data:{currentMovie:Movie}) => {
           this.selectedMovie=data.currentMovie;
           this.editTitle=data.currentMovie.title;
           this.editYear=data.currentMovie.year;
      });
    }

    saveMovie(movie){

      Object.assign(this.selectedMovie,movie);
      this.movieService.saveMovie(this.selectedMovie)
          .subscribe(() => this.goToList())

    }

    goToList(){
      this.router.navigate(['/movies']);
    }
}
