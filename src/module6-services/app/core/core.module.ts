import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesService} from "./movies.service";
import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {APP_CONFIG, appConfig} from "../config/app.config";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    MoviesService,
    LoggerService,
    ConfigService,
    {provide: APP_CONFIG, useValue: appConfig}
  ],
  declarations: []
})
export class CoreModule { }
