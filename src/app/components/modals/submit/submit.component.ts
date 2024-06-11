import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule
  ],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.scss'
})

export class SubmitComponent {
  constructor(public dialogRef: MatDialogRef<SubmitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: string, actionButton: string}
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }

}
