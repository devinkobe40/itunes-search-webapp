import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Result } from '../interface/result';

import { searchUrl } from '../api/url';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor(
    private http: HttpClient
  ) { }

  getSearchResults(): Observable<Result[]> {
    return this.http.get<Result[]>(searchUrl + 'results');
  }

}
