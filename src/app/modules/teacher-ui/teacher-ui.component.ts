import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-teacher-ui',
  templateUrl: './teacher-ui.component.html',
  styleUrls: ['./teacher-ui.component.css']
})
export class TeacherUiComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.authService.checkRole("teacher").then(
      data => {
        console.log("teacher: ");
      }
    ).catch(err => {
      if (err.status)
        localStorage.removeItem("jwt");
      console.log("err");
      this.router.navigate(['/home']);
    })
  }

  toggle_navbar() {
    this.isOpen = !this.isOpen;
  }

}
