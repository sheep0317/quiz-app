import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private teacherService:TeacherServiceService) { }
  
  ngOnInit(): void {
  }

  addNewStudent(input:any){
    this.teacherService.addStudentToClass(input.value,this.classId).then(
      data=>{
        console.log(data)
        this.uploaded.emit("");
      }
    ).catch(
      er=>{
        console.log(er)
        this.uploaded.emit("");
      }
    )
    input.value = ""
  }

}
