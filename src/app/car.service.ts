import { Injectable } from '@angular/core';
import { Car } from './car';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class CarService {

  private baseUrl = 'http://localhost:8080/AngularProject/cars';

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
      return this.http.get<Car[]>(this.baseUrl);
    }

  /** POST: add a new hero to the database */
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car, httpOptions);
  }
  updateCar(car:Car):Observable<Car> {
    const url = this.baseUrl+"/"+car.id;; 
    console.log("Inside update "+url +"  ");
    return this.http.put<Car>(url,car,httpOptions);
  }
  deleteCar(id:String):Observable<Car> {
    const url = this.baseUrl+"/"+id; 
    console.log("Inside delete"+url);
    return this.http.delete<Car>(url,httpOptions);
  }
}
