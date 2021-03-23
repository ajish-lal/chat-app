import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messagesList: any = [];
  activeUserMessages = [];
  lastMessageList = [];

  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  selectedUser(user: any) {
    let messages = this.messagesList.find((elem: any) => (elem.id === user.id));
    this.activeUserMessages = messages ? messages : { id: user.id, messages: [] };
  }

  initData() {
    this.messagesList = [{
      id: 1,
      messages: [{
        isCurrentUser: false,
        message: 'Hey man!'
      }, {
        isCurrentUser: false,
        message: 'How are you?'
      }],
    },
    {
      id: 2,
      messages: [{
        isCurrentUser: false,
        message: 'Good morning.'
      }, {
        isCurrentUser: false,
        message: 'Hey dear, how are you my love?'
      }],
    }];

    this.lastMessageList = this.messagesList.map((elem) => {
      let messages = elem.messages;
      if (messages) {
        return { id: elem.id, lastMessage: messages[messages.length - 1] }
      } else {
        return null;
      }
    });

    console.log(this.lastMessageList, this.messagesList)
  }

}
