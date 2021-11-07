import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent implements OnInit {

  imgUrl = "https://images.pexels.com/photos/9441882/pexels-photo-9441882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  listQuiz: { id: number, name: string , imgurl: string}[] = [
    { "id": 0, "name": "Available" ,"imgurl": this.imgUrl},
    { "id": 1, "name": "Ready" , "imgurl":this.imgUrl},
    { "id": 2, "name": "Started" , "imgurl":this.imgUrl}
]; // test


  constructor() { }

  ngOnInit(): void {
  }


}
