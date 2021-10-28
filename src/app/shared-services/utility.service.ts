import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getListOfBanksFromFlutterWave() {

    let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer FLWSECK-9a596c8767f2e1363127499ac9e6c4bd-X`)
    }

    const url = 'https://api.flutterwave.com/v3/banks/NG';
    return this.http.get<any>(url, header)
      .pipe(
        (catchError(this.handleError))
      )
  }

  private handleError(error: any) {
    console.log(error);
    return throwError('Cannot complete requests at this time. Check log fore mor info')
  }
}
