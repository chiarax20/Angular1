import { Component, OnInit, Input } from '@angular/core';
import { Result, Company } from '../Offerte';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfferteService } from '../offerte.service';

@Component({
  selector: 'app-dettaglio-offerta',
  templateUrl: './dettaglio-offerta.component.html',
  styleUrls: ['./dettaglio-offerta.component.css']
})
export class DettaglioOffertaComponent implements OnInit {

  @Input()
  offerta!: Result;
  offertaDue!: Result;
  idofferta!: string ;
  errormsg: any;
  compagnia! : Company;
  idcompany!:number;
  condition!:Boolean;

  constructor(
    private route: ActivatedRoute,
    private offerteService: OfferteService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.idofferta = this.route.snapshot.paramMap.get ('id')!;
    this.getDettaglioOfferte(this.idofferta);
  }

  getDettaglioOfferte(idt:string) {
      this.offerteService.getDettaglioOfferte(idt)
      .subscribe(
        risp =>this.offerta = risp,
        error => this.errormsg = error
      );
  }

  DetComp(): void{
    this.company(this.offerta.company.id);
    this.condition=true;

  }

  company(idcompany:number){
    this.offerteService.company(idcompany)
      .subscribe(
        risp => this.compagnia = risp,
        error => this.errormsg = error
    );
  }

  goBack(): void {
    this.location.back();
  }
}

