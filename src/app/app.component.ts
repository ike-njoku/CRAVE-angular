import { Component } from '@angular/core';
import { PopUpNotificationService } from './pop-up-notification/pop-up-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crave';

  constructor(
    public notificationService: PopUpNotificationService
  ) {}
}
