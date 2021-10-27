import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  toggleSideNav() {
    document.getElementById('side-nav')?.classList.toggle('active');
    document.getElementById('main')?.classList.toggle('active');
  }
}
