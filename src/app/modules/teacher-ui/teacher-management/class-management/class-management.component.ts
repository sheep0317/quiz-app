import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  listQuiz: Class[] = [
  ]

  classForm: FormGroup;



  constructor(private teacherService: TeacherServiceService, private toastr: ToastrService, private router: Router) {
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

  createNewClass() {
    this.teacherService.createNewClass(this.classForm.value.name).then(
      (data: any) => {
        console.log(data);
        this.getListClass();
        //this.reloadPage();
        this.showToastr(true, data);
        
      }
    ).catch(
      error => {
        console.log(error);
        this.showToastr(false, error);
      }
    )

  }

  getListClass() {
    this.teacherService.getListClass().then(
      (data: any) => {
        console.log("data:");
        console.log(data);
        this.listQuiz = data.body;
        console.log(this.listQuiz);
      }
    ).catch(
      error => console.log(error.error.message)
    )
  }

  deleteClass(event: any, id:string) {
    event.stopPropagation();
    console.log("deleteeeeeeeeeeeeeeeeeeee REEEEEEEEEEEEEEEEEE");
    this.teacherService.deleteClass(id).then(
      (data:any)=>{
        console.log(data);
        this.getListClass();
        this.showToastr(true, data);
      }
    ).then(
      er=>{
        console.log(er);
        if(er!=null)
        this.showToastr(false, er);
      }
    )
    
  }

  enableEdit(element: HTMLElement, editName: HTMLElement) {
    element.classList.add("d-none");
    editName.classList.remove("d-none");
    editName.focus()
  }

  banana(element: HTMLElement, editName: HTMLElement) {
    console.log("out of focuz");
    element.classList.remove("d-none");
    editName.classList.add("d-none");
  }

  onEdit(id: string, element: any) {
    if (element.value != "")
      this.teacherService.editClassName(id, element.value).then(
        (data: any) => {
          console.log(data)
          this.getListClass();
          this.showToastr(true, data);
        }
      ).catch(
        er => {
          console.log(er);
          this.showToastr(false, er);
        }
      )
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

  // reloadPage() {
  //   let currentUrl = this.router.url;
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate([currentUrl]);
  // }
}


