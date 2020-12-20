import { Component, OnInit } from '@angular/core';

import { Results } from '../interface/search-results';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results = <Results>{ resultCount: 0, results: [] };

  term: string = "";

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
      this.getSearchResults();
  }

  search(term: string): void {
    console.log(term);
  }

  getSearchResults(): void {
    this.searchService.getSearchResults().subscribe(
      (result) => {
        setTimeout(() => {
          this.results = result;
          console.log("search results: ",this.results.resultCount)
          console.log("items: ",this.results.results);
        }, 2000);
      }
    );
  }

}
