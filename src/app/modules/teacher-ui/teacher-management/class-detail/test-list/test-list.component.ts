import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  classId:string = "";
  @Input() sections:any;
  

  constructor(private teacherService: TeacherServiceService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {

     
     }

  ngOnInit(): void {
    this.classId = this.activatedRoute.snapshot.parent?.paramMap.get("classId") as string;
    
  }

  openTest(id:string){
    this.router.navigate(['/teacher/test/'+id]);
  }

  addNewTest(sectionId:string){
    this.router.navigate(['/teacher/course/'+sectionId+'/create_test']);
  }


}
