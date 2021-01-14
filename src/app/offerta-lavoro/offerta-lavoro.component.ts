import { Component, OnInit } from '@angular/core';
import { Result } from '../Offerte';
import { OfferteService } from '../offerte.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offerta-lavoro',
  templateUrl: './offerta-lavoro.component.html',
  styleUrls: ['./offerta-lavoro.component.css'],
})
export class OffertaLavoroComponent implements OnInit {

  public InputCity!:string;
  public LevelValue!:string;
  public RadioValue!:string;

  lista!: Result[];
  errormsg: any;
  public city="Italy";
  public level="";
  filtri!:string;
  str1!: string;
  str2!: string;
  str3!: string;

  constructor(
    private offerteService : OfferteService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  click(){
    this.level = '';
    this.filtri = '';
        if(this.InputCity){
          this.str1 = "City: " + this.InputCity;
          this.city = this.InputCity;
          this.InputCity ='';
        }
        else if(this.RadioValue=="All"){
          this.str1 = "City: " + this.RadioValue;
          this.city = "";
          this.RadioValue= "";
        }
        else{
          this.city="Italy";
          this.str1 ="City: Italy";
        }

        if(this.LevelValue){
          this.str2 = "Level: " + this.LevelValue;
          this.level = this.LevelValue;
          this.LevelValue= '';
        }
        else{
          this.str2 ="Level: All";
        }
    this.getOfferte(this.city, this.level);
  }

  getOfferte(city:string, level:string) {
    this.offerteService.getOfferte(city, level)
    .subscribe(
      risp => this.lista = this.filter(risp),
      error => this.errormsg = error,
    );
  }

  filter(OggettoUno : Result[]) {
    var filtro1 = OggettoUno.filter(x => x.locations.length > 0);
    var filtro2= filtro1.filter( x=> x.levels[0].short_name.includes(this.level))
    return filtro2.filter(x => x.locations[0].name.includes(this.city));
  }

  goBack(): void {
    this.location.back();
  }
}





