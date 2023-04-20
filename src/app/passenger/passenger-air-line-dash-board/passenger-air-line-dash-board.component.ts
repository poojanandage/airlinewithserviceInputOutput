import { Component, OnInit } from '@angular/core';
import { Ipassengers } from 'src/app/Model/passenger';
import { PassServices } from 'src/app/services/pass.services';

@Component({
  selector: 'app-passenger-air-line-dash-board',
  templateUrl: './passenger-air-line-dash-board.component.html',
  styleUrls: ['./passenger-air-line-dash-board.component.scss']
})
export class PassengerAirLineDashBoardComponent implements OnInit {
public passArr! : Ipassengers[];
public CheckCount! : number;

  constructor(private passServicesIntance:PassServices) { }

  ngOnInit(): void {
    this.passArr = this.passServicesIntance.passengers;
    this.CheckCount = this.passArr.filter(passenger =>{
    return  passenger.checkedIn
    }).length
  }
  onsendObj(eve : Ipassengers){
    this.passArr.filter((pass,index) =>{
      if(pass.id === eve.id){
        this.passArr.splice(index,1)
      }
    })
    this.CheckCount = this.passArr.filter(passenger =>{
      return  passenger.checkedIn
      }).length
  }

}
