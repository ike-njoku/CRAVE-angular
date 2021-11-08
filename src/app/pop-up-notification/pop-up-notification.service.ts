import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopUpNotificationService {

  constructor() { }
  notification!: string;

  addNotification(notification: string, timeOut?: number, options?: any) {
    this.clearNotification();
    this.notification = notification;
    console.log(this.notification);
    if (timeOut) {
      setTimeout(() => {
        this.clearNotification();
      }, timeOut)
    }
  }

  clearNotification() {
    this.notification = '';
  }

}
