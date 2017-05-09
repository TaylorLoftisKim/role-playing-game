import { Component, OnInit } from '@angular/core';
import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(player_name: string, user_name: string, age: number) {
    var newUser: User = new User(player_name, user_name, age);
    this.userService.addUser(newUser);
  }

}
