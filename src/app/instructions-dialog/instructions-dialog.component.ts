import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-instructions-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './instructions-dialog.component.html',
  styleUrl: './instructions-dialog.component.scss'
})
export class InstructionsDialogComponent {

}
