import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
