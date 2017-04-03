import {Component, Output, EventEmitter} from "@angular/core";

/**
 * Created by nirnoy on 21/11/2016.
 */

@Component({
  selector:'movies-filter',
  template:`
    <div>
        <label>
            Year: <input #filterTxt type="text" placeholder="Enter Release year"  />
        </label>
        <button (click)="onBtnClick(filterTxt.value)"> Filter</button>
    </div> 
     <div>
        <button (click)="sortyByYear" >Sort By Year</button>
    </div>
  `
})
export class MoviesFilterComponent {

  @Output()
  private onFilter:EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  onBtnClick(txt: string){
    this.onFilter.emit(txt);
  }

}
