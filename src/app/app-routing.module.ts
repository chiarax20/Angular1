import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioOffertaComponent } from './dettaglio-offerta/dettaglio-offerta.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'dettaglio/:id', component: DettaglioOffertaComponent},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

