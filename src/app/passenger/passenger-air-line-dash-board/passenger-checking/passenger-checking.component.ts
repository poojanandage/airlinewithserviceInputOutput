import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-checking',
  templateUrl: './passenger-checking.component.html',
  styleUrls: ['./passenger-checking.component.scss']
})
export class PassengerCheckingComponent implements OnInit {
@Input() checkInCount : number | undefined;
@Input() totalCheckIn : number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

