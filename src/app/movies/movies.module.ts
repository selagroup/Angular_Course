import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieDetailsComponent} from "./movieDetails.component";
import {MoviesListComponent} from "./moviesList.component";
import {FormsModule} from "@angular/forms";
import {MoviesService} from "../common/services/movies.service";
import {MovieNewComponent} from "./movieNew.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api/index";
import {MovieData} from "../common/data/movies.data";
import {MoviesPromiseService} from "../common/services/movies.promise.service";
import {MovieSearchComponent} from "./movie.search.component";
import {MoviesComponent} from "./movies.component";
import {MoviesRoutingModule} from "./movies.routing";
import {MovieEditDetailsComponent} from "./movieEditDetails.component";
import {MovieImageComponent} from "./movieImage.component";
import {AppCommonModule} from "../common/appCommon.module";
import {MoviesFilterComponent} from "./movies-filter.component";

import { MovieFormComponent } from './movieForm.component/movieForm.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports:[CommonModule, FormsModule, InMemoryWebApiModule.forRoot(MovieData), MoviesRoutingModule,AppCommonModule, ReactiveFormsModule],
  declarations:[MoviesComponent,
                MovieDetailsComponent,
                MoviesListComponent,
                MovieNewComponent,
                MovieSearchComponent,
                MovieEditDetailsComponent,
                MovieImageComponent,
                MoviesFilterComponent,
                MovieFormComponent
              ],
  exports:[MoviesComponent,MovieEditDetailsComponent,MoviesFilterComponent],
  providers:[MoviesService,MoviesPromiseService]
})

export class MoviesModule{};


