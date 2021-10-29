import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() toggleNav = new EventEmitter();

  ngOnInit(): void {
  }

  toggle_navbar(){
    this.toggleNav.emit("0");
  }

}
