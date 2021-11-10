import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateEnumeratorDto } from './create-enumerator-dto';
import { catchError } from 'rxjs/operators';
import { ServerResponseDTO, ServerResponseDtoStatus } from 'src/app/dto-interfaces/server-response-dto';


@Injectable({
  providedIn: 'root'
})
export class EnumeratorService {

  constructor(
    private http: HttpClient
  ) { }

  createEnumerator(enumerator: CreateEnumeratorDto): Observable<any> {
    const subUrl = `api/enumerator/create`;
    return this.http.post<any>(`${environment.baseUrl}/${subUrl}`, enumerator)
      .pipe(
        (catchError(this.handleError))
      )
  }

  getAllEnumerators(): Observable<ServerResponseDTO> {
    return this.http.get<ServerResponseDTO>(`${environment.baseUrl}/api/enumerator/list`)
    .pipe(
      (catchError(this.handleError))
    )
  }

  private handleError(error: any) {
    console.log(error);
    return throwError('Error: Could not completer request')
  }
}


