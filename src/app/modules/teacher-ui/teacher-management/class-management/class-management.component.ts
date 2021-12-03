import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObjectId } from 'bson';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private teacherService: TeacherServiceService, private toastr: ToastrService) {
    this.classForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
   }

  ngOnInit(): void {
    this.getListClass();
  }

  createNewClass(){
    this.teacherService.createNewClass(this.classForm.value.name).then(
      (data:any)=>{
        console.log(data);
        this.getListClass();
        this.showToastr(true,data);
      }
    ).catch(
      error=>{
        console.log(error);
      }
    )

  }

  getListClass(){
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

  deleteClass(event:any)
  {
    event.stopPropagation();
    console.log("deleteeeeeeeeeeeeeeeeeeee REEEEEEEEEEEEEEEEEE");
  }

  showToastr(success: boolean, message: any) {
    if (success) {
      this.toastr.success(message, "", {
        timeOut: 2000,
        progressBar: true
      })
    }
    else {
      this.toastr.error(message, "", {
        timeOut: 2000,
        progressBar: true
      })
    }
  }

}
