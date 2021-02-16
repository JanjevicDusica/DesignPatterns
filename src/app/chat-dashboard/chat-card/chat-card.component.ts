import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Avatar } from 'src/app/Models/Avatar';
import { Message } from 'src/app/Models/Message';
import { Mediator } from 'src/app/Patterns/Mediator';
import { ChatState } from 'src/app/store/reducers/chat.reducer';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css'],
})
export class ChatCardComponent implements OnInit, OnDestroy {
  @Input() avatar: Avatar;
  public messages: Message[] = [];
  public message: string = '';
  private messageSubscriber: Subscription;

  constructor(private readonly mediator: Mediator) {}

  ngOnInit(): void {
    this.messageSubscriber = this.mediator
      .getChat()
      .subscribe((chatState: ChatState) => {
        if (chatState.lastMessage)
          this.messages = [...this.messages, chatState.lastMessage];
      });
  }

  ngOnDestroy(): void {
    this.messageSubscriber.unsubscribe();
  }

  public send(): void {
    this.mediator.send(this.avatar, this.message);
    this.message = '';
  }

  public isThisMyMessage(message: Message): boolean {
    return message.sender === this.avatar;
  }
}
