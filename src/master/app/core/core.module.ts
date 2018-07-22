import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesService} from "./movies.service";
import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {HttpClientModule} from "@angular/common/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {MoviesDb} from "../data/movies.data";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MoviesDb)
  ],
  exports:[HttpClientModule],
  providers:[MoviesService, LoggerService, ConfigService],
  declarations: []
})
export class CoreModule { }
