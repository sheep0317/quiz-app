import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  classId:string ="";
  toggle:boolean = true; // true thì danh sách bài kiểm tra, false thì danh sách học sinh
  classDetail:any;

  constructor(private route: ActivatedRoute, private teacherService: TeacherServiceService) { }

  ngOnInit(): void {
    this.classId =  this.route.snapshot.paramMap.get("classId") as string;
    console.log(this.classId);
    this.teacherService.getClassDetail(this.classId).then(
      (data:any)=>{
        console.log(data);
        this.classDetail = data;
      }
    ).catch(
      er=>console.log(er)
    )
  }

  toggleChild(value:boolean){
    this.toggle = value;
  }

}
