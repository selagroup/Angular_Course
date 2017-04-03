/**
 * Created by nirnoy on 20/11/2016.
 */

import {NgModule} from "@angular/core";
import {YearAgoPipe} from "./pipes/yearsAgo.pipe";
import {ReleaseYearFilterPipe} from "./pipes/releaseYearFilter.pipe";
import {SortByYearPipe} from "./pipes/sortByYear.pipe";

@NgModule({
  declarations:[YearAgoPipe,ReleaseYearFilterPipe,SortByYearPipe],
  exports:[YearAgoPipe,ReleaseYearFilterPipe,SortByYearPipe]
})
export class AppCommonModule{}
