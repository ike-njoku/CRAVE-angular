import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServerResponseDTO } from '../dto-interfaces/server-response-dto';
import { CreateNewEnrolmentDto } from '../enumerator/enumerator-dashboard/create-enrolment/create-new-enrolment-dto';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  createNewEnrolment(newEnrolment: CreateNewEnrolmentDto): Observable<ServerResponseDTO> {
    const subUrl = '';
    return this.http.post<ServerResponseDTO>(`${environment.baseUrl}/${subUrl}`, newEnrolment)
      .pipe(
        (catchError(this.handleError))
      )
  }

  private handleError(error: any) {
    console.error(error)
    return throwError('Could not Complete request at this time. See consle for more')
  }

  constructor(
    private http: HttpClient
  ) { }
}
