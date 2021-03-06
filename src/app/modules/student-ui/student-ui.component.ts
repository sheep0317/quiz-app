import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-student-ui',
  templateUrl: './student-ui.component.html',
  styleUrls: ['./student-ui.component.css']
})
export class StudentUiComponent implements OnInit {

  @Input() isOpen:boolean = false;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.authService.checkRole("student").then(
      data=>{
        console.log("student: ");
      }
  ).catch(err=>{
    if(err.status == 403)
      localStorage.removeItem("jwt");
    console.log(err);
    this.router.navigate(['/home']);
  })
  }

  toggle_navbar(){
    this.isOpen = !this.isOpen;
  }

}
