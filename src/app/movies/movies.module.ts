import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MovieDetailsComponent, MoviesListComponent],
  exports: [MoviesListComponent, MovieDetailsComponent]
})
export class MoviesModule { }
