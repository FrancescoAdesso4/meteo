import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinqueGComponent } from './cinque-g.component';

describe('CinqueGComponent', () => {
  let component: CinqueGComponent;
  let fixture: ComponentFixture<CinqueGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinqueGComponent]
    });
    fixture = TestBed.createComponent(CinqueGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
