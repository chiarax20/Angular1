import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioOffertaComponent } from './dettaglio-offerta.component';

describe('DettaglioOffertaComponent', () => {
  let component: DettaglioOffertaComponent;
  let fixture: ComponentFixture<DettaglioOffertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioOffertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
