import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {FormsModule} from "@angular/forms";
import { MovieNewComponent } from './movie-new/movie-new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MovieDetailsComponent, MoviesListComponent, MovieNewComponent],
  exports: [MoviesListComponent, MovieDetailsComponent, MovieNewComponent]
})
export class MoviesModule { }
