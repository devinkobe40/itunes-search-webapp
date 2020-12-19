import { Component, OnInit } from '@angular/core';

import { Result } from '../interface/result';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results : Result[] = [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
      this.getSearchResults();
  }

  getSearchResults(): void {
    this.searchService.getSearchResults().subscribe(
      (result) => {this.results = result;
      console.log(this.results);}
    );
  }

}
