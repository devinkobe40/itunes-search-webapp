import { Component, OnInit } from '@angular/core';


import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Results } from '../interface/search-results';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results = <Results>{ resultCount: 0, results: [] };

  //icons
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  term: string = "";
  limit = true;
  searchQuery = false;
  loading = false;
  errMess: string = "";

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
      // this.getSearchResults();
      console.log("length: ",this.errMess.length);

  }

  search(term: string): void {
    this.limit = false;
    this.loading = true;
    this.searchQuery = true;
    this.searchService.searchResults(term).subscribe(
      (result) => {
        this.errMess = "";
        this.results = result;


        setTimeout(() => {
          this.loading = false;
          this.searchQuery = false;
        }, 2000);
      },
      (errmes) => {
        this.loading = false;
        this.errMess = <any>errmes;
        this.results = <Results>{ resultCount: 0, results: [] };
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
