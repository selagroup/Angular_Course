import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesService} from "./movies.service";
import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TimingInterceptor} from "./timing.interceptor";
import {MoviesCanDeactivateGuard} from "./movies-can-deactivate-guard.service";
import {ConfirmService} from "./confirm.service";
import {FavoritesService} from "./favorites.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[HttpClientModule],
  providers:[
    MoviesService, LoggerService, ConfigService,ConfirmService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    },
    MoviesCanDeactivateGuard,
    FavoritesService
  ],
  declarations: []
})
export class CoreModule { }
