import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Movie from '../common/models/movie.model';

@Component({
    selector: 'movie-new',
    styles:[
      `    
          .error{
              color:red;
              font-weight: bold;
              padding: 5px;
              
          }
          input.ng-invalid.ng-dirty{
            border: solid 2px red;
          }
        `
    ],
      template: `
        <form #movieFormRef="ngForm" (ngSubmit)="onSubmit(movieFormRef.value)" novalidate="1" >
            <div>
              <label >
                Title: <input type='text' 
                            [(ngModel)]="newMovie.title" 
                            #titleRef = "ngModel"
                            name="title"  
                            required
                            minlength="2"
                        />
              </label>
                <div *ngIf="titleRef.dirty && !titleRef.valid"  class="error">
                    <div *ngIf="titleRef.errors?.required" >This field is required</div>
                    <div *ngIf="titleRef.errors?.minlength" >This field has a minimum of {{titleRef.errors.minlength.requiredLength}} </div>
                </div>
            </div>   
             <div>
              <label >
                Year: <input type='text' 
                        [(ngModel)]="newMovie.year" 
                        #yearRef = "ngModel"
                        name="year"
                        required
                        pattern="^\\d+$"
                      />
              </label>
                <div class="error" *ngIf="!yearRef.valid">
                      <div *ngIf="yearRef.errors?.required">This Field is required</div>
                      <div *ngIf="yearRef.errors?.pattern">This Field contains numbers only</div>
                 </div>
            </div>  
             <div>
              <label >
                Poster Url: <input type='text' 
                                [(ngModel)]="newMovie.poster" 
                                name="poster"
                            />
              </label>
            </div>   
            <div>
                <button  >Add Movie</button>
            </div>
          </form>
    `
})
export class MovieNewComponent implements OnInit {

    private newMovie:Movie;

    @Output()
    private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
    constructor() { }

    ngOnInit() {
        this.newMovie=new Movie();
     }

    onSubmit(){
        this.onMovieAdded.emit(this.newMovie);
    }
}
