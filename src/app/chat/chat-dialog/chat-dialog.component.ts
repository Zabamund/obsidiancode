import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'ocio-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  fromValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new mesage is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val));
  }

  sendMessage() {
    this.chat.converse(this.fromValue);
    this.fromValue = '';
  }

}
