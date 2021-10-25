import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreateEnumeratorDto } from '../enumerator/create-enumerator/create-enumerator-dto';
import { EnumeratorSignInDto } from './enumerator-sign-in-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  enumeratorSignIn(enumerator: EnumeratorSignInDto): Observable<any> {
    const subUrl = '';
    return this.http.post<CreateEnumeratorDto>(`${environment.baseUrl}/${subUrl}`, enumerator)
      .pipe(
        (catchError(this.handleError))
      )
  }

  private handleError(error: any) {
    console.log(error, 'color: darkblue')
    return throwError('Could not Sign in at this moment')
  }
}
