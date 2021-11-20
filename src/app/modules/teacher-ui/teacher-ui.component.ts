import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-ui',
  templateUrl: './teacher-ui.component.html',
  styleUrls: ['./teacher-ui.component.css']
})
export class TeacherUiComponent implements OnInit {

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
