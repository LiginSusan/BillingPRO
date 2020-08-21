import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public user = {
    firstName: 'Melissa',
    lastName: 'Dade',
    image: 'assets/img/user2-160x160.jpg',
  };

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('token', 'LOGGED_IN');
    this.router.navigate(['/main']);
  }

  register() {
    localStorage.setItem('token', 'LOGGED_IN');
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
