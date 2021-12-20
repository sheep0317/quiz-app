import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  classId: string = "";
  @Input() sections: any;
  @Output()
  uploaded = new EventEmitter<string>();


  constructor(private teacherService: TeacherServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {


  }

  ngOnInit(): void {
    this.classId = this.activatedRoute.snapshot.parent?.paramMap.get("classId") as string;

  }

  openTest(id: string) {
    this.router.navigate(['/teacher/test/' + id]);
  }

  addNewTest(sectionId: string) {
    this.router.navigate(['/teacher/course/' + sectionId + '/create_test']);
  }

  editSection(event: any, id: string) {
    event.stopPropagation();
  }
  deleteSection(event: any, id: string) {
    event.stopPropagation();
    this.teacherService.deleteSection(id).then(
      (data: any) => {
        console.log(data)
        this.showToastr(true, data.body)
        this.uploaded.emit("");
      }
    ).catch(
      er => {
        console.log(er)
        this.showToastr(false, er.error.message)
      }
    )
  }

  deleteTest(id:string){
    this.teacherService.deleteTest(id).then(
      (data: any) => {
        console.log(data)
        this.showToastr(true, data.body)
        this.uploaded.emit("");
      }
    ).catch(
      er => {
        console.log(er)
        this.showToastr(false, er.error.message)
      }
    )
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
