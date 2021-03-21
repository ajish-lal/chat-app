import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
  @Input() activeUser: any;
  inputMessage = '';
  messageList: any = [{
    isCurrentUser: false,
    message: 'Good morning.'
  }, {
    isCurrentUser: false,
    message: 'Hey dear, how are you my love?'
  }];

  constructor() { }

  ngOnInit(): void { }

  sendMessage() {
    if (this.inputMessage) {
      this.messageList.push({ isCurrentUser: true, message: this.inputMessage });
      this.inputMessage = '';

      let messageContainer = document.getElementById('messageWindow');
      setTimeout(() => {
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight + 52;
        }
      });
    }
  }

}
