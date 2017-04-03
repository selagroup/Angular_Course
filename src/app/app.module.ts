import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MoviesModule} from './movies/movies.module';
import {HttpModule} from '@angular/http';
import {AppRouting} from './app.routing';



@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule,
                HttpModule,
                AppRouting,
                MoviesModule],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
