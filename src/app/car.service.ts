import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs';

const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseURL='http://localhost:8080/AngularProject/cars/';
  
  constructor(private http:HttpClient) { }

  //GetAll : To fetch all cars from db
  getAllCars():Observable<Car[]>{
      return this.http.get<Car[]>(this.baseURL);
  }

  //GetAll : To fetch all cars from db
  getCar(id:number):Observable<Car>{
    const url = this.baseURL+"/"+id;
    return this.http.get<Car>(url);
  }
  
    /** POST: add a new hero to the database */
    addCar (car: Car): Observable<Car> {
      return this.http.post<Car>(this.baseURL, car, httpOptions);
    }
    updateCar(car:Car):Observable<Car> {
      const url = this.baseURL+"/"+car.id;; 
      console.log("Inside update "+url +"  ");
      return this.http.put<Car>(url,car,httpOptions);
    }
    deleteCar(id:number):Observable<Car> {
      const url = this.baseURL+"/"+id; 
      console.log("Inside delete"+url);
      return this.http.delete<Car>(url,httpOptions);
    }

}
