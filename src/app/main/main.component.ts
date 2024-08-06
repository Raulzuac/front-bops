import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatDividerModule,RouterModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(
    private readonly router: Router,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('es-ES')
   }

  search(criteria:string){
    this.router.navigate(['/results'], { queryParams: { criteria } });
  }

}
