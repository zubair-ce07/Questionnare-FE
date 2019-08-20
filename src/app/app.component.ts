import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<msg-chat-box
  // (onSend)="sendMessage($event)"
  // [isFullScreen]="true"
  // [conversation]="conversation"
  // [currentUserId]="currentUserId">
  // </msg-chat-box>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Questionnare-FE';
  // currentUserId = 1;
  // conversation = [
  //   {
  //     text: 'Hello good morning',
  //     date: new Date(),
  //     user: {
  //       id: 2,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Paco'
  //     }
  //   },
  //   {
  //     text: 'Hi!',
  //     date: new Date(),
  //     user: {
  //       id: 1,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Ruben'
  //     }
  //   },
  //   {
  //     text: 'Hello good morning',
  //     date: new Date(),
  //     user: {
  //       id: 2,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Paco'
  //     }
  //   },
  //   {
  //     text: 'Hi!',
  //     date: new Date(),
  //     user: {
  //       id: 1,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Ruben'
  //     }
  //   },
  //   {
  //     text: 'Hello good morning',
  //     date: new Date(),
  //     user: {
  //       id: 2,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Paco'
  //     }
  //   },
  //   {
  //     text: 'Hi!',
  //     date: new Date(),
  //     user: {
  //       id: 1,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Ruben'
  //     }
  //   }
  // ]

  // sendMessage(text1) {
  //   this.conversation.push({
  //     text: text1,
  //     date: new Date(),
  //     user: {
  //       id: this.currentUserId,
  //       imageUrl: 'http://via.placeholder.com/100x100',
  //       name: 'Ruben'
  //     }
  //   })
  // }
}
