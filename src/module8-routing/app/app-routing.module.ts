import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', redirectTo:'movies' , pathMatch:'full'},
  {path:'login', component: LoginComponent},
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
