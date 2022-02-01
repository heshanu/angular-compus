import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { ViewsHomeComponent } from './views/views-home/views-home.component';
import { ModalComponent } from './mods/modal/modal.component';

const routes: Routes = [
  {
    path:'elements',
    loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule)
  },

  {
  path:'collections',
  loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
},

{
  path:'views',
  loadChildren:()=>import('./views/views.module').then(m=>m.ViewsModule)
},

{
  path:'modes',
  loadChildren:()=>import('./mods/mods.module').then(m=>m.ModsModule)
},

  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
