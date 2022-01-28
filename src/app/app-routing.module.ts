import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component'
//import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
