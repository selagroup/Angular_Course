import {Component, OnInit} from '@angular/core';


@Component({
  selector   : 'app-root',
  styles:[`
    h1 {
      color:blue;
    }
    section{
      padding:10px;
    }
  `],
  template:`
    <h1>Movie Catalog</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit  {

  constructor(){

  }


  ngOnInit(){
    console.log('app init');
  }


}
