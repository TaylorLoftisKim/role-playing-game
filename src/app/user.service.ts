import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  rooms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
    this.rooms = database.list('rooms');
  }

  getUsers() {
    return this.users;
  }

  getRooms() {
    return this.rooms;
  }

  getChoicesByRoomId(roomId: string) {
    return this.database.object('rooms/' + roomId + '/choices/');
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }

  getRoomById(roomId: string) {
    return this.database.object('rooms/' + roomId);
  }

}
