import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnumeratorRoutesGuardService implements CanActivate {
  constructor() { }

  canActivate() {

    return true
  }
}
