import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoCorrenteComponent } from './tempo-corrente.component';

describe('TempoCorrenteComponent', () => {
  let component: TempoCorrenteComponent;
  let fixture: ComponentFixture<TempoCorrenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempoCorrenteComponent]
    });
    fixture = TestBed.createComponent(TempoCorrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
