import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BopResponse } from '../config/interfaces/bops-response.interface';

import { HttpClient } from '@angular/common/http';
import { preSearchTypes } from '../config/pre-search-types';

@Injectable({
  providedIn: 'root'
})
export class BopsService {

  constructor(
    private readonly http: HttpClient
  ) { }


  url = 'http://localhost:3000/'

  preSearchIds = preSearchTypes.map((type) => type.value);

  getBops(criteria: string):Observable<BopResponse[]> {
    if(!this.preSearchIds.includes(criteria)) {

      return this.http.get<BopResponse[]>(`${this.url}bops?content=${criteria}`);
    }
    const query = preSearchTypes.find((type) => type.value === criteria);
    return this.http.get<BopResponse[]>(`${this.url}${query?.name}`);

  }
}
