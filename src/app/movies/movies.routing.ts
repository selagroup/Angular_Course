import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MoviesComponent} from "./movies.component";
import {MovieDetailsComponent} from "./movieDetails.component";
import { MovieDetailsResolve } from '../common/services/movieDetails-Resolve.service';
import { MoviesCanDeactivateGuard } from './movies-can-deactivate-guard.service';
import {ConfirmService} from "../common/services/confirm.service";
import {MovieEditDetailsComponent} from "./movieEditDetails.component";
import {MovieImageComponent} from "./movieImage.component";

 const routes:Routes =[
   { path: 'movies', component: MoviesComponent },
   {
     path: 'movies/:id',
     component:MovieEditDetailsComponent,
     resolve:{
       currentMovie:MovieDetailsResolve
     },
     children:[
        {
         path: 'edit',
         component:MovieDetailsComponent,
         canDeactivate:[MoviesCanDeactivateGuard]
        },
        {
         path:'poster',
         component: MovieImageComponent
        }
     ]
   }
 ];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[MovieDetailsResolve,ConfirmService,MoviesCanDeactivateGuard]
})
export class MoviesRoutingModule{}
