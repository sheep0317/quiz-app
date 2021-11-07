import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'bson';
import { Class } from 'src/app/model/Class';


@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent implements OnInit {

  imgUrl = "https://images.pexels.com/photos/9441882/pexels-photo-9441882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  listQuiz:Class[] = [
    new Class(new ObjectId(), "Available", this.imgUrl, ""),
    new Class(new ObjectId(), "Available", this.imgUrl, ""),
    new Class(new ObjectId(), "Available", this.imgUrl, ""),
    new Class(new ObjectId(), "Available", this.imgUrl, ""),
    new Class(new ObjectId(), "Available", this.imgUrl, ""),
    new Class(new ObjectId(), "Available", this.imgUrl, "")
  ]



  constructor() { }

  ngOnInit(): void {
  }


}
