import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {MoviesModule} from "./movies/movies.module";
import {CoreModule} from "./core/core.module";
import {LoggerServiceProvider} from "./core/logger.service.provider";

@NgModule({
  declarations:[AppComponent],
  imports: [BrowserModule, CoreModule, MoviesModule],
  bootstrap: [AppComponent],
  providers:[LoggerServiceProvider]

})
export  class AppModule{}
