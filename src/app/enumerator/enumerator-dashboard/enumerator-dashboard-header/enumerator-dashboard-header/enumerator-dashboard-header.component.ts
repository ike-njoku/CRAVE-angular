import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { DashboardService } from 'src/app/shared-services/dashboard.service';

@Component({
  selector: 'app-enumerator-dashboard-header',
  templateUrl: './enumerator-dashboard-header.component.html',
  styleUrls: ['./enumerator-dashboard-header.component.css']
})
export class EnumeratorDashboardHeaderComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public dashboardService: DashboardService
  ) { }



  ngOnInit(): void {
  }

}
