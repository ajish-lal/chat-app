import { Component, OnInit, ViewChild } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @ViewChild(UserListComponent) temp: any;
  messagesList: any = [];
  activeUserMessages = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.temp);

    this.messagesList = [{
      id: 1,
      messages: [{
        isCurrentUser: false,
        message: 'Good morning.'
      }, {
        isCurrentUser: false,
        message: 'Hey dear, how are you my love?'
      }],
    },
    {
      id: 2,
      messages: [{
        isCurrentUser: false,
        message: 'Hey man!'
      }, {
        isCurrentUser: false,
        message: 'How are you?'
      }],
    }];
  }

  selectedUser(user: any) {
    let messages = this.messagesList.find((elem: any) => (elem.id === user.id));
    this.activeUserMessages = messages ? messages : { id: user.id, messages: [] };
  }

}
