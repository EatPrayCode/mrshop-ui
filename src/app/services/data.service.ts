import { categoriesListMain } from './../mocks/categories.mock';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, delay, map } from 'rxjs/operators';
import { packCustomiseOptions, productsList } from '../mocks/categories.mock';

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
    const categoryName: string = payload;
    const obs1$ = of(categoriesListMain[categoryName]);
    return obs1$
      .pipe(
        delay(environment.loadLag),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  getPacksList(payload: any): Observable<any> {
    const obs1$ = of(productsList);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(environment.loadLag),
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
        delay(environment.loadLag),
        map(data => {
          return this.responseHandlerFn(payload, data)
        })
      );
  }

  getCustomiseOptions(payload: any): Observable<any> {
    const response = {
      ...payload,
      // packJson: this.getPackJson(payload)
    };
    const obs1$ = of(response);
    // const obs1$ = this.http.get<any>(url);
    return obs1$
      .pipe(
        delay(environment.loadLag),
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
