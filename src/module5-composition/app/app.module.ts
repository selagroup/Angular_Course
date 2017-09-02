import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MoviesModule} from "./movies/movies.module";

@NgModule({
  declarations:[AppComponent],
  imports: [BrowserModule,MoviesModule],
  bootstrap: [AppComponent]

})
export  class AppModule{}
