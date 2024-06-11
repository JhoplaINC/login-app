import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faAt, faKey, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SubmitComponent } from '../../modals/submit/submit.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})

export class LoginRegisterComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}

  faUser = faUser;
  faAt = faAt;
  faKey = faKey;
  faPaperPlane = faPaperPlane;

  actualUrl: string = '';

  ngOnInit() {
    this.router.url == '/register' ? this.actualUrl = '/register' : this.actualUrl = '/login';
  }

  loginForm() {
    const dialogRef = this.dialog.open(SubmitComponent, {
      width: '500px',
      data: {
        title: 'You logged succesfully',
        message: 'This and other modals here, are just decorative :)',
        actionButton: 'Let\'s go!'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  registerForm() {
    const dialogRef = this.dialog.open(SubmitComponent, {
      width: '500px',
      data: {
        title: 'You registration is pending on approval',
        message: 'This and other modals here, are just decorative :)',
        actionButton: 'I understand'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
