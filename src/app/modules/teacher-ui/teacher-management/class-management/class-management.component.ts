import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  ]

  classForm: FormGroup;

  constructor(private teacherService: TeacherServiceService) {
    this.classForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
   }

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

  createNewClass(){
    this.teacherService.createNewClass(this.classForm.value.name).then(
      (data:any)=>{
        console.log(data);
      }
    ).catch(
      error=>{
        console.log(error);
      }
    )

  }

}
