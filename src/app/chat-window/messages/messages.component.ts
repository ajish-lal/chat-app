import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
  @Input() activeUserMessages: any = [];
  inputMessage = '';
  messageList: any = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(change) {
    if (change.activeUserMessages.currentValue) {
      this.messageList = change.activeUserMessages.currentValue.messages
    }
  }

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
