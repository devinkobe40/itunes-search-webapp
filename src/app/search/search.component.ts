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
  limit = true;
  searchQuery = false;
  loading = false;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
      // this.getSearchResults();

  }

  search(term: string): void {
    this.limit = false;
    this.loading = true;
    this.searchQuery = true;
    this.searchService.searchResults(term).subscribe(
      (result) => {
        this.results = result;

        setTimeout(() => {
          this.loading = false;
          this.searchQuery = false;
        }, 2000);
      }
    );
  }

  // getSearchResults(): void {
  //   this.searchService.getSearchResults().subscribe(
  //     (result) => {
  //       setTimeout(() => {
  //         this.results = result;
  //         console.log("search results: ",this.results.resultCount)
  //         console.log("items: ",this.results.results);
  //       }, 2000);
  //     }
  //   );
  // }

}
