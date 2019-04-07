import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  car:Car = { id:'1' , name:'Subaru' ,type:'SUV' };
  cars:Car[];
  selectedCar:Car;

  constructor(private carService:CarService) {
    this.getCarsfromDB();
    
   }
  getCarsfromDB(): void {
    this.carService.getAllCars().subscribe((data: Car[]) => this.cars = data );
  }
  onSelect(car:Car):void{
    this.selectedCar = car;
  }
  ngOnInit() {
  }

}
