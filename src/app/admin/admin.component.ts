import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedCar:Car = { id:'15' , name:'Subaru' ,type:'SUV' };
  cars:Car[];
  newCar:Car;
  constructor(private carService:CarService) { 
    this.getCarsfromDB();
  }
  //get all cars
  getCarsfromDB(): void {
    this.carService.getAllCars().subscribe((data: Car[]) => this.cars = data );
  }
  //save new car details
  saveCartoDB(id:string,name:string,type:string):void{
    console.log("in car save");
    this.newCar = {
      id: id,
      name:name,
      type:type
    };
    this.carService.addCar(this.newCar).subscribe();
  }
  //Update car details
  updateCartoDB(car:Car):void{
    this.carService.updateCar(this.selectedCar).subscribe();
  }
  //delete car details
  deleteCarinDB(id:string):void{
   this.carService.deleteCar(id).subscribe();
    console.log("car deleted");
  }
  onSelect(car:Car):void{
    this.selectedCar = car;
  }
  clearAll(){
    this.selectedCar.id="";
    this.selectedCar.name="";
    this.selectedCar.type="";
  }
  reload(){
    this.carService.getAllCars().subscribe((data: Car[]) => this.cars = data );
  }
  ngOnInit() {
  }

}
