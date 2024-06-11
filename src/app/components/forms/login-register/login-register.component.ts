import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})

export class LoginRegisterComponent {
  constructor(
    private router: Router
  ) {}

  actualUrl: string = '';

  ngOnInit() {
    this.router.url == '/register' ? this.actualUrl = '/register' : this.actualUrl = '/login';
  }

}
