import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  showModal:boolean = false;


  @Output()
  modalOkClick = new EventEmitter<any>();

  @Output()
  modalCancelClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }


  onClick(isConfirm:boolean){
    if(isConfirm){
      return this.modalOkClick.emit();
    }
      this.modalCancelClick.emit();

    this.showModal=false;
  }

  setModal(show:boolean){
    this.showModal = show;
  }

}
