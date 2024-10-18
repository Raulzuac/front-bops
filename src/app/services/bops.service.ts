import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


  url = 'http://217.182.209.193:3000/'

  preSearchIds = preSearchTypes.map((type) => type.value);

  getBops(criteria: SearchInterface):Observable<BopResponse[]> {
    if(!this.preSearchIds.includes(criteria.criteria[0]) && criteria.criteria.length > 0){

      return this.http.post<BopResponse[]>(`${this.url}search`,criteria)
    }
    const query = preSearchTypes.find((type) => type.value === criteria.criteria[0]);
    console.log(criteria)
    return this.http.get<BopResponse[]>(`${this.url}${query?.name}`);

  }
}
