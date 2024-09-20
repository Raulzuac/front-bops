import { Component } from '@angular/core';



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
export class ResultsComponent {

  bops: BopResponse[] = [];
  notFound = false;

  constructor(
    private readonly router: Router,
    private readonly bopsService: BopsService,
  ){
    const criteria = new URLSearchParams(window.location.search).get('criteria');
    const startDate = new URLSearchParams(window.location.search).get('start_date');
    const endDate = new URLSearchParams(window.location.search).get('end_date');

    if(criteria!=null && criteria!=''){
      //separamos el criteria por $ y a los pares les ponemos delante un $
      const criteriaSplitted = criteria.split('$').map((c, i) => i % 2 != 0 ? `$${c}` : c);
      const search:SearchInterface = {
        criteria: criteriaSplitted,
        start_date: startDate || '',
        end_date: endDate || ''
      }
      console.log(search);


      this.bopsService.getBops(search).subscribe((bops) => {
        if(bops.length === 0){
          this.notFound = true;
        }
        this.bops = bops.sort((a, b) => b.bop.date > a.bop.date ? 1: 0);
      })
    }else{
      this.router.navigate(['/']);
    }
  }



}
