import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
