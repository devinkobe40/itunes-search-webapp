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
  noResults = false;
  searchQuery = false;
  loading = false;
  errMess: string = "";

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(term: string): void {

    // reinitializes the boolean to hide the no results message
    this.noResults = false;

    this.loading = true;

    // If the function returns a null cancelling the progress bar

    if (term === "") {
      this.loading = false;      
    }


    this.searchQuery = true;
    this.searchService.searchResults(term).subscribe(
      (result) => {

        // reinitializes the progress bar if theres a return value
        this.loading = true;

        // erases the error message if theres no error
        this.errMess = "";
        this.results = result;

        // will activate if the query found no items
        if (this.results.results.length === 0) {
          this.noResults = true;
        }

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

}
