import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-enumerator-dashboard',
  templateUrl: './enumerator-dashboard.component.html',
  styleUrls: ['./enumerator-dashboard.component.css']
})
export class EnumeratorDashboardComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }
  toggleSideNav() {
    document.getElementById('side-nav')?.classList.toggle('active');
    document.getElementById('main')?.classList.toggle('active');
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/enumerator/sign-in']);
  }

}
