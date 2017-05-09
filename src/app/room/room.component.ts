import { Component, OnInit } from '@angular/core';
import { Room } from "../room.model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToClickedRoom(clickedRoom: Room) {
    
  }
}
