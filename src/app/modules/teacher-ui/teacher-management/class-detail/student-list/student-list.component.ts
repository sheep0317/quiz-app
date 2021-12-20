import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() studentList:any;
  @Input() classId:string ="";
  @Output()
  uploaded = new EventEmitter<string>();

  constructor(private teacherService:TeacherServiceService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
  }

  addNewStudent(input:any){
    this.teacherService.addStudentToClass(input.value,this.classId).then(
      (data:any)=>{
        console.log(data)
        this.uploaded.emit("");
        this.showToastr(true,data.body);
      }
    ).catch(
      er=>{
        console.log(er)
        this.uploaded.emit("");
        this.showToastr(false,er.error.message);
      }
    )
    input.value = ""
  }

  showToastr(success: boolean, message: any) {
    if (success) {
      this.toastr.success(message, "", {
        timeOut: 3000,
        progressBar: true
      })
    }
    else {
      this.toastr.error(message, "", {
        timeOut: 3000,
        progressBar: true
      })
    }
  }

}
