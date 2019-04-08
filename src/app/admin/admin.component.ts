import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { isUndefined, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedCar:Car = { id:15 , name:'Subaru' ,type:'SUV' };
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
  saveCartoDB(id:number,name:string,type:string):void{
    if(isNaN(id) || isNullOrUndefined(name) || isNullOrUndefined(type) || name=="" || type=="") {
      alert("Please Check whether data entered is correct");
    }else{
      this.newCar = {
      id: id,
      name:name,
      type:type
    };
    this.carService.addCar(this.newCar).subscribe();
    }
  }
  //Update car details
  updateCartoDB(id:number,name:string,type:string):void{
    alert(id);
    if(isNaN(id) || isNullOrUndefined(name) || isNullOrUndefined(type) || name=="" || type==""){
      alert("Please Check whether data entered is correct");
    }else{
      this.newCar = {
        id: id,
        name:name,
        type:type
      };
    this.carService.updateCar(this.newCar).subscribe();
    }
  }
  //delete car details
  deleteCarinDB(id:number):void{
    if(isNaN(id)) {
      alert("Please enter a number in ID field");
    }else{
      this.carService.deleteCar(id).subscribe();
    }
      
  }
  onSelect(car:Car):void{
    this.selectedCar = car;
  }
  clearAll(){
    this.selectedCar.id=null;
    this.selectedCar.name="";
    this.selectedCar.type="";
  }
  reload(){
    this.carService.getAllCars().subscribe((data: Car[]) => this.cars = data );
  }
  ngOnInit() {
  }

}
