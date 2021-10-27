import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EnumeratorSignInDto } from './enumerator-sign-in-dto';
import { ServerResponseDTO } from '../dto-interfaces/server-response-dto';
import jwt_decode from "jwt-decode";
import { ServerSessionDetailDto } from './server-session-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly enumeratorAccessTokenStrringIdentifier = 'crave-sxnzbcqoiplmuyts-2';
  private readonly userNameStringIdentifier = 'crave-in86ybAbvZpxq.7';
  private jwtDecod = jwt_decode;
  private  activeUser!: ServerSessionDetailDto;
  constructor(
    private http: HttpClient
  ) { }

  enumeratorSignIn(enumerator: EnumeratorSignInDto): Observable<any> {
    const subUrl = 'api/enumerator/sign-in';
    return this.http.post<ServerResponseDTO>(`${environment.baseUrl}/${subUrl}`, enumerator)
      .pipe(
        tap((response) => {
          this.storeEnumeratorSessionDetails(response)
        }),
        (catchError(this.handleError))
      )
  }

  storeEnumeratorSessionDetails(sessionDetail: ServerResponseDTO) {
    const enumeratorToken = sessionDetail.data;
    localStorage.setItem(
      this.enumeratorAccessTokenStrringIdentifier,
      enumeratorToken
      )
    this.activeUser = this.jwtDecod(JSON.stringify(sessionDetail.data));
    localStorage.setItem(this.userNameStringIdentifier, this.activeUser.firstName)
  }

  getActiveUserName(): string | null {
    return localStorage.getItem(this.userNameStringIdentifier)
  }

  private handleError(error: any) {
    console.log(error, 'color: darkblue')
    return throwError('Could not Sign in at this moment')
  }

  signOut(): void {
    return localStorage.clear();
  }
}
