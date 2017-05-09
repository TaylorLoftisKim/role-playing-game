import { Component, OnInit } from '@angular/core';
import { Room } from "../room.model";
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [UserService]
})
export class RoomComponent implements OnInit {
  userId: string;
  roomId: string;
  choicesToDisplay;
  roomToDisplay;
  rooms: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.userId = urlParameters['id'];
      this.roomId = urlParameters['roomId'];
      this.rooms = this.userService.getRooms();
      this.roomToDisplay = this.userService.getRoomById(this.roomId);
      this.choicesToDisplay = this.userService.getChoicesByRoomId(this.roomId);
    })
  }

  goToClickedRoom(clickedChoice) {
    this.router.navigate(['users/' + this.userId + '/rooms/' + clickedChoice[1]]);
  }
}
