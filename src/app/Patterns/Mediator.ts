import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Avatar } from '../Models/Avatar';
import { Message } from '../Models/Message';
import { AddMessage } from '../store/actions/chat.actions';
import { AppState } from '../store/app.state';
import { ChatState } from '../store/reducers/chat.reducer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mediator {
  constructor(private readonly store: Store<AppState>) {}

  public getChat(): Observable<ChatState> {
    return this.store.select((state) => state.chat);
  }

  public send(sender: Avatar, message: string): void {
    this.store.dispatch(
      AddMessage({
        message: new Message(sender, message),
      })
    );
  }
}
