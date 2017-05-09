import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from "./about/about.component";
import { UserComponent } from "./user/user.component";
import { RoomComponent } from "./room/room.component";
import { CurrentUserComponent } from "./current-user/current-user.component";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'users/:id',
    component: CurrentUserComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
