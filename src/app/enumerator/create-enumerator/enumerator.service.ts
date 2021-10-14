import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateEnumeratorDto } from './create-enumerator-dto';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnumeratorService {

  constructor(
    private http: HttpClient
  ) { }

  createEnumerator(enumerator: CreateEnumeratorDto): Observable<any> {
    const subUrl = `api/emumerator/create`;
    return this.http.post<any>(`${environment.baseUrl}/${subUrl}`, enumerator)
      .pipe(
        (catchError(this.handleError))
      )
  }

  private handleError(error: any) {
    console.log(error);
    return throwError('Error: Could not completer request')
  }
}


