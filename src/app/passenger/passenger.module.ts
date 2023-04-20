import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerAirLineDashBoardComponent } from './passenger-air-line-dash-board/passenger-air-line-dash-board.component';
import { PassengerCheckingComponent } from './passenger-air-line-dash-board/passenger-checking/passenger-checking.component';
import { PassengerDetailsComponent } from './passenger-air-line-dash-board/passenger-details/passenger-details.component';
import { PassServices } from '../services/pass.services';




@NgModule({
  declarations: [
    PassengerAirLineDashBoardComponent,
    PassengerCheckingComponent,
    PassengerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PassengerAirLineDashBoardComponent],
  providers:[PassServices]

})
export class PassengerModule { }
