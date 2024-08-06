import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BopResponse } from '../config/interfaces/bops-response.interface';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'result',
  standalone: true,
  imports: [MatCardModule,MatDivider,MatIconModule,MatButtonModule,MatTooltipModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  @Input() bop!: BopResponse;

  constructor(
    private _snackBar: MatSnackBar
  ) { }


  copyLink(){
    navigator.clipboard.writeText(`localhost:3000/downloadpdf/${this.bop.bopId}`);
    this._snackBar.open('Enlace copiado al portapapeles', 'Cerrar', {
      duration: 2000
    })
  }

  downloadPDF(){
    window.open(`http://localhost:3000/downloadpdf/${this.bop.bopId}`);
  }


  formatDate(date:Date):string{
    // 2024-07-31 > 31/07/2024
    const dateString = date.toString();
    const year = dateString.substring(0,4);
    const month = dateString.substring(5,7);
    const day = dateString.substring(8,10);
    return `${day}/${month}/${year}`;
  }

}
