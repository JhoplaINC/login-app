import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faAt, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { SubmitComponent } from '../../modals/submit/submit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  constructor(public dialog: MatDialog) { }

  faUser = faUser;
  faAt = faAt;
  faMessage = faMessage;
  faPaperPlane = faPaperPlane;

  submitForm() {
    const dialogRef = this.dialog.open(SubmitComponent, {
      width: '500px',
      data: {
        title: 'Thanks for contacting us',
        message: 'This and other modals here, are just decorative :)',
        actionButton: 'Close'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
