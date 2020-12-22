import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Results } from '../interface/search-results';

import { ErrorHandlingService } from './error-handling.service';
import { searchUrl } from '../api/url';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  regex: RegExp = /(\s+)/gi;

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }

  getSearchResults(): Observable<Results> {
    return this.http.get<Results>(searchUrl);
  }

  searchResults(term: string): Observable<Results> {
    //handling error cause of white spaces.
    if ( term === "" || term.replace(this.regex, '+') === "+") {
      return of();
    }

    const url = searchUrl + 'search?term=' + term.toLowerCase().replace(this.regex, '+');

    return this.http.get<Results>(url)
           .pipe(catchError(this.errorHandlingService.handleError));
  }

}
