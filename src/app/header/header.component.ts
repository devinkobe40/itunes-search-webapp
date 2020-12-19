import { Component, OnInit } from '@angular/core';
import { faItunes } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //icons
  faItunes = faItunes;
  faHeadphones = faHeadphones;

  constructor() { }

  ngOnInit(): void {
  }

}
