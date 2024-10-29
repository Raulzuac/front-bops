import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BopResponse } from '../config/interfaces/bops-response.interface';

import { HttpClient } from '@angular/common/http';
import { preSearchTypes } from '../config/pre-search-types';
import { SearchInterface } from '../config/interfaces/search-query.interface';

@Injectable({
  providedIn: 'root'
})
export class BopsService {

  constructor(
    private readonly http: HttpClient
  ) { }


  url = 'https://buscaboletines.com:3000/'
  // url = 'https://localhost:3000/'
  bops: BopResponse[] = [];
  bops$ = new BehaviorSubject<BopResponse[]>(this.bops);
  emptyBop = false;
  emptyBops$ = new BehaviorSubject<boolean>(false);
  searching = false;
  searching$ = new BehaviorSubject<boolean>(false);


  preSearchIds = preSearchTypes.map((type) => type.value);

  async getBops(criteria: SearchInterface) {
    if (!this.preSearchIds.includes(criteria.criteria[0]) && criteria.criteria.length > 0) {
      this.searching = true;
      this.searching$.next(true);

      this.http.post<BopResponse[]>(`${this.url}search`, criteria).subscribe(
        (response) => {
          this.bops = response;
          this.bops = this.bops.sort((a, b) => b.bop.date > a.bop.date ? 1 : 0);
          this.bops$.next(this.bops);
          this.searching = false;
          this.searching$.next(false);
        }
      )

      return;
    }
    const query = preSearchTypes.find((type) => type.value === criteria.criteria[0]);
    console.log(criteria)
    this.searching = true;
    this.searching$.next(true);
    this.http.get<BopResponse[]>(`${this.url}${query?.name}`).subscribe(
      (response) => {
        this.bops = response;
        this.bops = this.bops.sort((a, b) => b.bop.date > a.bop.date ? 1 : 0);
        this.bops$.next(this.bops);
        this.searching = false;
        this.searching$.next(false);
      }
    );
    console.log(this.bops);

  }
}
