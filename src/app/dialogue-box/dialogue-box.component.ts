import { Component, OnInit } from '@angular/core';
import { DialogueService } from '../shared/dialogue.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class DialogueBoxComponent implements OnInit {
  condition = false;
  currentUserId = 1;
  dialogues = [{ id: 0, name: 'Order Food' }, { id: 1, name: 'Lets Play' }];

  conversation = [
    {
      text: 'Hello I am BOT',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: '/static/assets/images/bot.png',
        name: 'ArbiSoft Bot'
      }
    },
  ]
  index: any;


  constructor(public dialogueService: DialogueService) { }
  ngOnInit() {
  }

  selectDialogue(id) {
    console.log(id);
    this.index = id;
    this.dialogueService.getQuestionnare(id).subscribe(
      (res) => {
        console.log(res);
        this.condition = true;
        this.conversation.push({
          text: res.question + '(' + res.options + ')',
          date: new Date(),
          user: {
            id: 2,
            imageUrl: '/static/assets/images/bot.png',
            name: 'ArbiSoft Bot'
          }
        });
      },
      (error) => {
        console.log(error)
      }
    );
  }

  sendMessage(text1) {
    this.conversation.push({
      text: text1,
      date: new Date(),
      user: {
        id: 1,
        imageUrl: '/static/assets/images/user.png',
        name: 'ArbiSoft User'
      }
    });
    this.dialogueService.getOptions(this.index, text1).subscribe(
      (response) => {
        console.log(response)
        if (response.message) {
          this.conversation.push({
            text: response.message,
            date: new Date(),
            user: {
              id: 2,
              imageUrl: '/static/assets/images/bot.png',
              name: 'ArbiSoft Bot'
            }
          });
        }
        else {
          this.conversation.push({
            text: response.question + '(' + response.options + ')',
            date: new Date(),
            user: {
              id: 2,
              imageUrl: '/static/assets/images/bot.png',
              name: 'ArbiSoft Bot'
            }
          });

        }

      },
      (error) => {
        console.log(error);
        this.conversation.push({
          text: 'I am afraid ! You might have given some wrong input. Please select the dialogue from above list',
          date: new Date(),
          user: {
            id: 2,
            imageUrl: '/static/assets/images/bot.png',
            name: 'ArbiSoft Bot'
          }
        });
      }
    );
  }
}
