import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'bson';
import { Class } from 'src/app/model/Class';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

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

  constructor(private teacherService: TeacherServiceService) { }

  ngOnInit(): void {
    this.teacherService.getListClass().then(
      (data:any)=>{
        console.log("data:");
        console.log(data);
        this.listQuiz = data;
        console.log(this.listQuiz);
      }
    ).catch(
      error => console.log(error)
    )
  }

}
