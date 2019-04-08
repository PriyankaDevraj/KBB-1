import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { NewCar } from './new_car';
import { Observable } from 'rxjs';

const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class NewCarService {
  private baseURL='http://localhost:8080/AngularProject/new_cars/';
  
  constructor(private http:HttpClient) { }

  //GetAll : To fetch all cars from db
  getAllNewCars():Observable<NewCar[]>{
      return this.http.get<NewCar[]>(this.baseURL);
  }

  //GetAll : To fetch all cars from db
  getNewCar(id:number):Observable<NewCar>{
    const url = this.baseURL+"/"+id;
    return this.http.get<NewCar>(url);
  }
  
    /** POST: add a new hero to the database */
    addNewCar (newcar: NewCar): Observable<NewCar> {
      return this.http.post<NewCar>(this.baseURL, newcar, httpOptions);
    }
    updateNewCar(newcar:NewCar):Observable<NewCar> {
      const url = this.baseURL+"/"+newcar.id;; 
      console.log("Inside update "+url +"  ");
      return this.http.put<NewCar>(url,newcar,httpOptions);
    }
    deleteNewCar(id:number):Observable<NewCar> {
      const url = this.baseURL+"/"+id; 
      console.log("Inside delete"+url);
      return this.http.delete<NewCar>(url,httpOptions);
    }

}
