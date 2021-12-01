import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserServiceService } from '../../../service/user-service.service'
import { ObjectId } from 'bson';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  userInformation: User;
  constructor(private user: UserServiceService) {
    this.userInformation = {
      name: '',
      email: '@',
      phone: '',
      gender: true,
      birthday: '',
      role: 'role',
      address: '',
      id: new ObjectId()
    };
  }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
    this.user.getInformation().subscribe(
      data => {
        console.log(data);
        if (data.body != null)
          this.userInformation = data.body as User;
      },
      err => {
        console.log(err)
      }
    )
  }
  changePassword(current: String, newPass: String, cfmPass: String) {
  }
  editProfile(phone: string, gender: string, birthday: string, address: string) {
    console.log(phone + gender + address + birthday)
  }
}
