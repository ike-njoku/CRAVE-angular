import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: any;
  readonly socketUrl = 'http://localhost:3000';

  constructor() {
    this.socket = io.io(this.socketUrl);
   }

  listen(eventName: string){
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data)
        console.log(data)
      })
    })
  }

  emit(eventName: string, data: any ) {
    this.socket.emit(eventName, data)
  }
}
