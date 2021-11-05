import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServerResponseDTO } from '../dto-interfaces/server-response-dto';
import { CreateNewEnrolmentDto } from '../enumerator/enumerator-dashboard/create-enrolment/create-new-enrolment-dto';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  public enrolment$: BehaviorSubject<string> = new BehaviorSubject('');

  createNewEnrolment(newEnrolment: CreateNewEnrolmentDto){
    this.socket.emit('NewEnrolment', newEnrolment)
  }

  public getLastEnrolment = () => {
    this.socket.on('newEnrolment', (enrolment: any) => {
      console.log(enrolment)
      this.enrolment$.next(enrolment)
    });
    return this.enrolment$.asObservable()
  }

  private handleError(error: any) {
    console.error(error)
    return throwError('Could not Complete request at this time. See consle for more')
  }

  constructor(
    private http: HttpClient,
    private socket: Socket
  ) { }
}
