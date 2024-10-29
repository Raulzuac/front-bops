import { Component, Input, OnInit } from '@angular/core';



import {MatIconModule} from '@angular/material/icon';

import { ResultComponent } from '../result/result.component';
import { BopsService } from '../services/bops.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { BopResponse } from '../config/interfaces/bops-response.interface';
import { SearchInterface } from '../config/interfaces/search-query.interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatIconModule,ResultComponent,HttpClientModule,RouterModule,MatProgressSpinnerModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {

  bops?: BopResponse[] = [];
  notFound = false;
  loading = true;

  constructor(
    private readonly bopsService: BopsService,
  ){

  }
  ngOnInit(): void {

    this.bopsService.bops$.subscribe(
      (bops) => {
        console.log(bops)
        this.bops = bops;
        this.notFound = this.bops.length === 0;
      }
    )

    this.bopsService.searching$.subscribe(
      (searching) => {
        console.log(searching)
        this.loading = searching;
      }
    )

  }




}
