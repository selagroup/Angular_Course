import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyloadedComponent} from "./lazyloaded/lazyloaded.component";
import {RouterModule, Routes} from "@angular/router";



const routes:Routes=[
  {path:'', component: LazyloadedComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LazyloadedRoutingModule{ }
