import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, delay, map } from 'rxjs/operators';
import { categoriesList, packCustomiseOptions, productsList } from '../mocks/categories.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'sampleurl';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCategoriesList(payload: any): Observable<any> {
    const obs1$ = of(categoriesList);
    console.log(payload);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(2000),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  getPacksList(payload: any): Observable<any> {
    const obs1$ = of(productsList);
    console.log(payload);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(2000),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  getPacksDetails(payload: any): Observable<any> {
    const obs1$ = of(packCustomiseOptions);
    console.log(payload);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(2000),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  getCustomiseOptions(payload: any): Observable<any> {
    const obs1$ = of(packCustomiseOptions);
    console.log(payload);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(2000),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  responseHandlerFn(payload: any, data: any) {
    return data;
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
