import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';

const routes: Routes = [
  {path:'', redirectTo:"Exercice1",pathMatch:'full'},
  {path:'Convertisseur', component : ConvertisseurComponent},
  {path:'Actors', component : ActorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
