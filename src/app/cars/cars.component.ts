import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  cars=CARS;
  constructor() { }

  ngOnInit() {
;
  }


}
