import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {MoviesModule} from "./movies/movies.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations:[AppComponent],
  imports: [BrowserModule, CoreModule, MoviesModule],
  bootstrap: [AppComponent]

})
export  class AppModule{}
