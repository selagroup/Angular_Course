
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalDialogComponent} from "./modal-dialog/modal-dialog.component";
import { DefaultImageDirective } from './default-image.directive';
@NgModule({
  imports:[CommonModule],
  declarations:[ModalDialogComponent, DefaultImageDirective],
  exports:[ModalDialogComponent, DefaultImageDirective]

})
export class SharedModule{};
