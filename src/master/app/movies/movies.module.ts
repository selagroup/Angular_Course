import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {FormsModule} from "@angular/forms";
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieListContainerComponent } from './movie-list-container/movie-list-container.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieDetailsContainerComponent } from './movie-details-container/movie-details-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [MovieListContainerComponent, MovieDetailsComponent, MoviesListComponent, MovieNewComponent, MovieListContainerComponent, MovieDetailsContainerComponent],
  exports: [MovieListContainerComponent]
})
export class MoviesModule { }
