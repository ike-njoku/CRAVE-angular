import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { EnumeratorService } from 'src/app/enumerator/create-enumerator/enumerator.service';

@Component({
  selector: 'app-enumerator-dashboard-header',
  templateUrl: './enumerator-dashboard-header.component.html',
  styleUrls: ['./enumerator-dashboard-header.component.css']
})
export class EnumeratorDashboardHeaderComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
