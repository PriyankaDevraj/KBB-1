import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Car } from './car';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseURL='http://localhost:8080/AngularProject/cars/';
  
  constructor(private http:HttpClient) { }

  //GetAll : To fetch all cars from db
  getAllCars():Observable<Car[]>{
    console.log("All cars being fethched "+this.baseURL);
    return this.http.get<Car[]>(this.baseURL).pipe(catchError(this.handleError));
  }

  //GetAll : To fetch all cars from db
  getCar(id:number):Observable<Car>{
    const url = this.baseURL+"/"+id;
    console.log("Car being fethched "+url +"  ");
    return this.http.get<Car>(url).pipe(catchError(this.handleError));
  }
  
    /** POST: add a new hero to the database */
    addCar (car: Car): Observable<Car> {
      console.log("Car being added "+this.baseURL +"  ");
      return this.http.post<Car>(this.baseURL, car, httpOptions).pipe(catchError(this.handleError));
    }
    updateCar(car:Car):Observable<Car> {
      const url = this.baseURL+"/"+car.id;; 
      console.log("Car being updated "+url +"  ");
      return this.http.put<Car>(url,car,httpOptions).pipe(catchError(this.handleError));
    }
    deleteCar(id:number):Observable<Car> {
      const url = this.baseURL+"/"+id; 
      console.log("Car being deleted "+url +"  ");
      return this.http.delete<Car>(url,httpOptions).pipe(catchError(this.handleError));
    }
    private handleError(error: HttpErrorResponse) {
      
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
          alert("Operation failed.Please check the data entered.");
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
        
    }
}
