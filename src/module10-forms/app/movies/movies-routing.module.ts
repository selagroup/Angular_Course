import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MovieListContainerComponent} from "./movie-list-container/movie-list-container.component";
import {MovieDetailsContainerComponent} from "./movie-details-container/movie-details-container.component";
import {MoviesCanDeactivateGuard} from "../core/movies-can-deactivate-guard.service";
import {MoviesViewComponent} from "./movies-view/movies-view.component";
import {MovieNewComponent} from "./movie-new/movie-new.component";



const routes:Routes =[
  {
    path: 'movies',
    component: MoviesViewComponent,
    children:[
      {
        path:'',
        component: MovieListContainerComponent
      },
      {
        path:'new',
        component:MovieNewComponent
      }
    ]
  },
  { path: 'movies/:id', component: MovieDetailsContainerComponent, canDeactivate: [MoviesCanDeactivateGuard]  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MoviesRoutingModule { }
