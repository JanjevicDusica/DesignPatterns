import { ActionReducerMap } from '@ngrx/store';

import * as fromAvatars from './reducers/avatar.reducer';
import * as fromChat from './reducers/chat.reducer';

export interface AppState {
  avatars: fromAvatars.AvatarsState;
  chat: fromChat.ChatState;
}

export const reducers: ActionReducerMap<any> = {
  avatars: fromAvatars.avatarDataUpdater,
  chat: fromChat.chatDataUpdater,
};
