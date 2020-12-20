import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Results } from '../interface/search-results';

import { searchUrl } from '../api/url';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor(
    private http: HttpClient
  ) { }

  getSearchResults(): Observable<Results> {
    return this.http.get<Results>(searchUrl);
  }

}
