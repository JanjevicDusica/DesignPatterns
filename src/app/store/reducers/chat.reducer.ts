import { Action, createReducer, on } from '@ngrx/store';
import { Avatar } from 'src/app/Models/Avatar';
import { Message } from 'src/app/Models/Message';
import { AddMessage, SetChat } from '../actions/chat.actions';

export interface ChatState {
  chat: Message[];
  lastMessage: Message;
}

export const initialState: ChatState = {
  chat: [],
  lastMessage: null,
};

const _chatDataUpdater = createReducer(
  initialState,
  on(SetChat, (state, { chat }) => {
    return {
      ...state,
      chat: chat,
      lastMessage: { ...chat[chat.length - 1] },
    };
  }),
  on(AddMessage, (state, { message }) => {
    return {
      ...state,
      chat: [...state.chat, message],
      lastMessage: message,
    };
  })
);

export function chatDataUpdater(state: ChatState, action: Action) {
  return _chatDataUpdater(state, action);
}
