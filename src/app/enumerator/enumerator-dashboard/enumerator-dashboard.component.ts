import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-enumerator-dashboard',
  templateUrl: './enumerator-dashboard.component.html',
  styleUrls: ['./enumerator-dashboard.component.css']
})
export class EnumeratorDashboardComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signOut() {

  }

}
