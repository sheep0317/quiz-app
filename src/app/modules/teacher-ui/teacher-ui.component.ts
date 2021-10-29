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
  }

  toggle_navbar(){
    this.isOpen = !this.isOpen;
  }

}
