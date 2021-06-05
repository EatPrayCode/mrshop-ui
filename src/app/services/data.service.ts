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
      packJson: this.getPackJson(payload)
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

  getPackJson(payload: any): any {
    const item1 = {
      name: 'PackContents',
      type: 'checkbox',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' }
      ]
    };
    const PackBudget = {
      name: 'PackBudget',
      type: 'Radio',
      data: [
        { id: 100, name: '1000' },
        { id: 200, name: '3000' },
        { id: 300, name: '5000' },
        { id: 400, name: '8000' }
      ]
    };
    const item3 = {
      name: 'Radio1',
      type: 'radio',
      data: [
        { id: 'Once', name: 'Radio-2 1' },
        { id: 'Daily', name: 'Radio-2 2' },
        { id: 'Weekly', name: 'Radio-2 3' },
        { id: 'Interval', name: 'Radio-2 4' },
      ]
    };
    const PackSize = {
      name: 'PackBudget',
      type: 'Radio',
      data: [
        { id: 1, name: 'Bachelor' },
        { id: 2, name: 'Mini (2 adults, 1 child)' },
        { id: 3, name: 'Medium (2 adults, 2 child)' },
        { id: 4, name: 'Large (2 adults, 3 child)' },
        { id: 5, name: 'Joint (4 adults, 2+ child)' },
        { id: 6, name: 'Custom' }
      ]
    };

    const PackFrequency = {
      name: 'PackFrequency',
      type: 'Radio',
      data: [
        { id: 1, name: '1 Month' },
        { id: 2, name: '3 Months' },
        { id: 3, name: '6 Months' },
        { id: 4, name: '9 Months' },
        { id: 5, name: '12 months' },
        { id: 6, name: 'Forever' }
      ]
    };
    return [item1, PackBudget, item3, PackSize, PackFrequency];
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
