import { Component } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { CarService } from './car.service';
import { map } from 'rxjs/operators';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cars:Car[];
 newCar:Car;
  title = 'kbb-project';
  show = 'true'
  value:string;
  

  car: Car = {
    id: '15',
    name: 'Subaru',
    type:'Sedan'
  };
  selectedCar:Car=this.car;
  ngOnInit(){ 
    this.getCarsfromDB();
  }
  constructor( private carService:CarService){}

  getCarsfromDB(): void {
    this.carService.getCars()
    .subscribe((data: Car[]) => this.cars =data );
    
 }
 saveCartoDB(car:Car):void{
   //this.carService.addCar(car).subscribe(car => this.cars.push(car));
   this.carService.addCar(car).subscribe();
 }
 updateCartoDB(car:Car):void{
   this.carService.updateCar(this.selectedCar).subscribe();
 }
 deleteCarinDB(car:Car):void{
  this.carService.deleteCar(this.selectedCar.id).subscribe();
   console.log("car deleted");
 }
 saveCar(id:string,name:string,type:string):void{
   console.log("in car save");
  this.newCar = {
    id: id,
    name:name,
    type:type
  };
  this.saveCartoDB(this.newCar);
 }
 clearAll(){
   this.selectedCar.id="";
   this.selectedCar.name="";
   this.selectedCar.type="";
 }
  getCars(){
    //getting hardcoded car values
    this.cars=CARS;
    console.log(this.cars.toString)
    if(this.show=='false')
    this.show='true';
    
 }
 onEnter(value: string) { 
   this.value = value; 
   this.show='true' ;
  }
  onSelect(car:Car):void{
    this.selectedCar = car;
    console.log("car selected");
  }
  
}
