import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertaLavoroComponent } from './offerta-lavoro.component';

describe('OffertaLavoroComponent', () => {
  let component: OffertaLavoroComponent;
  let fixture: ComponentFixture<OffertaLavoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffertaLavoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertaLavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
