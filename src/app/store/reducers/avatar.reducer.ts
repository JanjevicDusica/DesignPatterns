import { Action, createReducer, on } from '@ngrx/store';
import { Avatar } from 'src/app/Models/Avatar';
import { AddAvatar, SetAvatars } from '../actions/avatar.actions';

export interface AvatarsState {
  avatars: Avatar[];
}

export const initialState: AvatarsState = {
  avatars: [],
};

const _avatarDataUpdater = createReducer(
  initialState,
  on(SetAvatars, (state, { avatars }) => {
    return {
      ...state,
      avatars: avatars,
    };
  }),
  on(AddAvatar, (state, { avatar }) => {
    return {
      ...state,
      avatars: [...state.avatars, avatar],
    };
  })
);

export function avatarDataUpdater(state: AvatarsState, action: Action) {
  return _avatarDataUpdater(state, action);
}
