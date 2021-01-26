import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  visibility = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onClick(e): void {
    // console.log( 'You clicked: ' + e.target.innerHTML);
    this.visibility = false;
  }
}
