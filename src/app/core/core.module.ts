import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesService} from "./movies.service";
import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[MoviesService, LoggerService, ConfigService],
  declarations: []
})
export class CoreModule { }
