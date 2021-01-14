import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriRicercaComponent } from './filtri-ricerca.component';

describe('FiltriRicercaComponent', () => {
  let component: FiltriRicercaComponent;
  let fixture: ComponentFixture<FiltriRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltriRicercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltriRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
