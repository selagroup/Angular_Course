import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path:'', redirectTo:'movies' , pathMatch:'full'},
  {path:'lazy',loadChildren:'app/lazyloaded/lazyloaded.module#LazyloadedModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
