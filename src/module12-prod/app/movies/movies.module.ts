import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieListContainerComponent } from './movie-list-container/movie-list-container.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieDetailsContainerComponent } from './movie-details-container/movie-details-container.component';
import {CoreModule} from "../core/core.module";
import {MoviesViewComponent} from "./movies-view/movies-view.component";
import { YearsAgoPipe } from './years-ago.pipe';
import { SortByYearPipe } from './sort-by-year.pipe';
import {MovieNewReactiveComponent} from "./movie-new-reactive/movie-new-reactive.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [MovieListContainerComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MovieNewComponent,
    MovieNewReactiveComponent,
    MovieListContainerComponent,
    MovieDetailsContainerComponent,
    MoviesViewComponent,
    YearsAgoPipe,
    SortByYearPipe
  ],
  exports: [MovieListContainerComponent]
})
export class MoviesModule { }
