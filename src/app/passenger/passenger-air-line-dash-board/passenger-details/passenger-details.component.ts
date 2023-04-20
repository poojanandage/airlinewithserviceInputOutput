import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassengers } from 'src/app/Model/passenger';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
@Input() getobj! : Ipassengers;
@Output() sendObj : EventEmitter<Ipassengers> = new EventEmitter<Ipassengers>;
public flag :boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
this.flag = !this.flag;

  }
  onRemoveclick(){
this.sendObj.emit(this.getobj)
console.log(this.getobj);

  }

}
