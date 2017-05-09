import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.userId = urlParameters['id'];
   });
   this.userToDisplay = this.userService.getUserById(this.userId);
  }

  goToCurrentUserStartRoom() {
     this.router.navigate(['users/' + this.userId + '/rooms/0']);
   };
}
