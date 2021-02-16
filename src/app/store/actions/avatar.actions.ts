import { createAction, props, union } from '@ngrx/store';
import { Avatar } from 'src/app/Models/Avatar';

export enum AvatarActions {
  AddAvatar = '[Avatar] Add Avatar',
  SetAvatars = '[Avatar] Add All Avatars',
}

export const SetAvatars = createAction(
  AvatarActions.SetAvatars,
  props<{ avatars: Avatar[] }>()
);

export const AddAvatar = createAction(
  AvatarActions.AddAvatar,
  props<{ avatar: Avatar }>()
);

const all = union({ AddAvatar, SetAvatars });
