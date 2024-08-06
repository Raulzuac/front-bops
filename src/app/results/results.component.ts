import { Component } from '@angular/core';



import {MatIconModule} from '@angular/material/icon';

import { ResultComponent } from '../result/result.component';
import { BopsService } from '../services/bops.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { BopResponse } from '../config/interfaces/bops-response.interface';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatIconModule,ResultComponent,HttpClientModule,RouterModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  bops: BopResponse[] = [];

  constructor(
    private readonly router: Router,
    private readonly bopsService: BopsService,
  ){
    const criteria = new URLSearchParams(window.location.search).get('criteria');
    if(criteria!=null && criteria!=''){
      this.bopsService.getBops(criteria).subscribe((bops) => {
        this.bops = bops;
      })
    }else{
      this.router.navigate(['/']);
    }
  }



}
