import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication/authentication.service';
import { ServerResponseDTO } from '../dto-interfaces/server-response-dto';
import { CreateNewEnrolmentDto } from '../enumerator/enumerator-dashboard/create-enrolment/create-new-enrolment-dto';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  createNewEnrolment(newEnrolment: CreateNewEnrolmentDto): Observable<ServerResponseDTO> {
    const subUrl = 'enrolment/new'
    newEnrolment.enrolledBy = this.authService.getActiveEnumerator().userName;

    return this.http.post<ServerResponseDTO>(`${environment.baseUrl}/${subUrl}`, newEnrolment)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAllEnrolments(): Observable<ServerResponseDTO> {
    const subUrl = 'enrolment/list';
    return this.http.get<ServerResponseDTO>(`${environment.baseUrl}/${subUrl}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: any) {
    console.error(error)
    return throwError('Could not Complete request at this time. See consle for more')
  }
}
