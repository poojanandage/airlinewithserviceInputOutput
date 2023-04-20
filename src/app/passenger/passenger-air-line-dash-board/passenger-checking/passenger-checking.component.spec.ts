import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCheckingComponent } from './passenger-checking.component';

describe('PassengerCheckingComponent', () => {
  let component: PassengerCheckingComponent;
  let fixture: ComponentFixture<PassengerCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerCheckingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
