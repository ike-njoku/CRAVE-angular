import { Component, OnInit } from '@angular/core';
import { PopUpNotificationService } from '../pop-up-notification.service';

@Component({
  selector: 'app-pop-up-notification',
  templateUrl: './pop-up-notification.component.html',
  styleUrls: ['./pop-up-notification.component.css']
})
export class PopUpNotificationComponent implements OnInit {

  notification!: string;
  constructor(
    public notificationService: PopUpNotificationService
  ) { }

  ngOnInit(): void {

  }

}
