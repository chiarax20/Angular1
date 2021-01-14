import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtri-ricerca',
  templateUrl: './filtri-ricerca.component.html',
  styleUrls: ['./filtri-ricerca.component.css'],
})
export class FiltriRicercaComponent implements OnInit {

  choose!: boolean;

  @Output () childEvent = new EventEmitter<string>();
  @Output () childEvent2 = new EventEmitter<string>();
  @Output () childEvent3 = new EventEmitter<string>();
  @Output ("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  CityValue(value:string){
    this.childEvent3.emit(value);
  }

  onChange(value:string){
    this.childEvent.emit(value);
  }

  onSelect(value:string){
    this.childEvent2.emit(value);
  }

  ChooseCity(){
     this.choose = true;
  }

  click(){
    this.parentFun.emit();
  }
  form!:any;
  city!: boolean;
  all!: boolean;
  check1!: boolean;
  check2!: boolean;
  check3!: boolean;
  check4!: boolean;
  check5!: boolean;



  Clear(){
    this.form = '';
    this.city = false;
    this.all = false;
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
