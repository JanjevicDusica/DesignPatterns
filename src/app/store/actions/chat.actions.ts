import { createAction, props, union } from '@ngrx/store';
import { Message } from 'src/app/Models/Message';

export enum ChatActions {
  AddMessage = '[Chat] Add Message',
  SetChat = '[Chat] Add Chat',
}

export const SetChat = createAction(
  ChatActions.SetChat,
  props<{ chat: Message[] }>()
);

export const AddMessage = createAction(
  ChatActions.AddMessage,
  props<{ message: Message }>()
);

const all = union({ AddMessage, SetChat });
