import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAirLineDashBoardComponent } from './passenger-air-line-dash-board.component';

describe('PassengerAirLineDashBoardComponent', () => {
  let component: PassengerAirLineDashBoardComponent;
  let fixture: ComponentFixture<PassengerAirLineDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerAirLineDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerAirLineDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
