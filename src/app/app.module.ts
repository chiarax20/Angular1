import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { FiltriRicercaComponent } from './filtri-ricerca/filtri-ricerca.component';
import { OffertaLavoroComponent } from './offerta-lavoro/offerta-lavoro.component';
import { DettaglioOffertaComponent } from './dettaglio-offerta/dettaglio-offerta.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    FiltriRicercaComponent,
    OffertaLavoroComponent,
    DettaglioOffertaComponent,
    Error404Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
