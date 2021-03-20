import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
  inputMessage = '';
  messageList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.inputMessage) {
      this.messageList.push(this.inputMessage);
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
