import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-ui',
  templateUrl: './student-ui.component.html',
  styleUrls: ['./student-ui.component.css']
})
export class StudentUiComponent implements OnInit {

  @Input() isOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
    let jwt = localStorage.getItem("jwt");
    if(jwt == null)
    {
      console.log("jwt null");
    }
    else
    {
      console.log(jwt);
    }
  }

  toggle_navbar(){
    this.isOpen = !this.isOpen;
  }

}
