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
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from "../search/search.component";
import { ResultsComponent } from "../results/results.component";
import { BopsService } from '../services/bops.service';
import { BopResponse } from '../config/interfaces/bops-response.interface';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatDividerModule, RouterModule, MatDatepickerModule, MatNativeDateModule, FormsModule, CommonModule, MatTabsModule, SearchComponent, ResultsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  bops:BopResponse[] = [];
  constructor(
    private readonly bopsService: BopsService,
  ) {

    this.bops = this.bopsService.bops;
    console.log(this.bops);

   }



}
