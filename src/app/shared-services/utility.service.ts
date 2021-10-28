import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private http: HttpClient
  ) { }

  getStatesAndLocalGovts(): Observable<any> {
    const url = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';
    return this.http.get<any>(url)
      .pipe(
        (catchError(this.handleError))
      )
  }

  handleError(error: any) {
    console.log(error);
    return throwError('Cannot complete requests at this time. Check log fore mor info')
  }
}
