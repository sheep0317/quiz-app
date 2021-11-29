import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'bson';
import { Class } from 'src/app/model/Class';

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css']
})
export class ClassManagementComponent implements OnInit {
  
  imgUrl = "./../../../../assets/img/smol_gura.jpeg";

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
