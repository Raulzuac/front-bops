import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {  DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BopsService } from '../services/bops.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatDividerModule,RouterModule,MatDatepickerModule,MatNativeDateModule,FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  date_from?: string;
  date_to?: string;
  search_criteria?: string;
  //yyyy,mm,dd todas las fechas
  min_date_start = new Date(2024,6,18).toISOString().split('T')[0];
  max_date_start = new Date().toISOString().split('T')[0];

  max_date_end = new Date().toISOString().split('T')[0];
  min_date_end = new Date(2024,6,18).toISOString().split('T')[0];

  ready = false;

  constructor(
    private readonly bopsService: BopsService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('es-ES')
   }

  checkReady(){
    console.log(`Estamos llamando al ready \n desde: ${this.date_from} \n hasta: ${this.date_to} \n criterio: ${this.search_criteria}`);


    this.ready = this.search_criteria != undefined && this.date_from != undefined && this.date_to != undefined && this.search_criteria != '' ;

    if(this.date_from != undefined){
      this.min_date_end = this.date_from;
      //30 dias mas
      let max = new Date(this.date_from);
      max.setDate(max.getDate() + 30);
      this.max_date_end = max.toISOString().split('T')[0];

    }
    if(this.date_to != undefined){
      this.max_date_start = this.date_to;
      //30 dias menos
      let min = new Date(this.date_to);
      min.setDate(min.getDate() - 30);
      this.min_date_start = min.toISOString().split('T')[0];
    }
  }

  search(criteria:string){

    const start_date:string = this.date_from!;
    const end_date:string = this.date_to!;
    const criteriaSplitted = criteria.split('$').map((c, i) => i % 2 != 0 ? `$${c}` : c);

    this.bopsService.getBops({
      criteria: criteriaSplitted,
      start_date,
      end_date
    });
  }

  navigateToResults(){

  }


}
