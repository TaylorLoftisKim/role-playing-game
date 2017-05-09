import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css'],
  providers: [UserService]
})
export class CurrentUserComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.userId = urlParameters['id'];
   });
   this.userToDisplay = this.userService.getUserById(this.userId);
  }

}
