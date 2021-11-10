import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { WebSocketService } from 'src/app/shared-services/web-socket.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  enrolments: number = 0;

  constructor(
    private webSocketService: WebSocketService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.listenForNewEnrolment();
  }

  listenForNewEnrolment() {
    this.webSocketService.listen('newEnrolment')
      .subscribe(
        (response: any) => {
          this.enrolments += 1;
        }
      )
  }

  signOut() {
    this.authService.signOut();
  }

}
