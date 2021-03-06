import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {MoviesModule} from "./movies/movies.module";
import {CoreModule} from "./core/core.module";
import {LoggerServiceProvider} from "./core/logger.service.provider";
import {AppRoutingModule} from "./app-routing.module";
import { ModalDialogComponent } from '../../module11-advanced/app/shared/src/master/app/shared/modal-dialog/modal-dialog.component';

@NgModule({
  declarations:[AppComponent, ModalDialogComponent],
  imports: [BrowserModule, CoreModule, MoviesModule,AppRoutingModule],
  bootstrap: [AppComponent],
  providers:[LoggerServiceProvider]

})
export  class AppModule{}
