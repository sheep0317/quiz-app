import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username:string = "Shrimp is gud"

  constructor() { }

  @Output() toggleNav = new EventEmitter();

  ngOnInit(): void {
    let u = localStorage.getItem("username");
    if(u!=null)
    {
      this.username = u;
    }
  }

  toggle_navbar(){
    this.toggleNav.emit("0");
  }

}
