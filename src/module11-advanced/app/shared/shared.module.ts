
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalDialogComponent} from "./modal-dialog/modal-dialog.component";
@NgModule({
  imports:[CommonModule],
  declarations:[ModalDialogComponent],
  exports:[ModalDialogComponent]

})
export class SharedModule{};
