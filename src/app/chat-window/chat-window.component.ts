import { Component, OnInit, ViewChild } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @ViewChild(UserListComponent) temp: any;
  activeUser = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.temp);
  }

  selectedUser(user: any) {
    this.activeUser = user;
  }

}
