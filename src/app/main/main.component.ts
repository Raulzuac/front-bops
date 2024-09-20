import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchInterface } from '../config/interfaces/search-query.interface';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatDividerModule,RouterModule,MatDatepickerModule,MatNativeDateModule,FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  date_from?: Date;
  date_to?: Date;
  search_criteria?: string;

  min_date_start = new Date(2024,6,18);
  max_date_start = new Date();

  max_date_end = new Date();
  min_date_end = new Date(2024,6,18);

  ready = false;

  constructor(
    private readonly router: Router,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('es-ES')
   }

  checkReady(){

    this.ready = this.search_criteria != undefined && this.date_from != undefined && this.date_to != undefined && this.search_criteria != '' ;

    //cambiamos las fechas max y min de los datepickers max 30 dias de diferencia
    if(this.date_from != undefined){
      this.min_date_end = this.date_from;
      //30 dias mas
      this.max_date_end = new Date(this.date_from);
      this.max_date_end.setDate(this.max_date_end.getDate() + 30);
      if(this.max_date_end > new Date()){
        this.max_date_end = new Date();
      }

    }
    if(this.date_to != undefined){
      this.max_date_start = this.date_to;
      //30 dias menos
      this.min_date_start = new Date(this.date_to);
      this.min_date_start.setDate(this.min_date_start.getDate() - 30);
    }
  }

  search(criteria:string){
    //sacamos la fecha de los datepickers

    console.log(this.date_from);
    console.log(this.date_to);

    this.router.navigate(['/results'], { queryParams: { criteria,start_date:"15/09/2024",end_date:"17/09/2024" } });
  }

}
