import { Injectable } from '@angular/core';
import { Avatar, Colors, Gender } from '../Models/Avatar';
import { AvatarBuilder } from './AvatarBuilder';

@Injectable({
  providedIn: 'root',
})
export class Factory {
  constructor() {}

  public createAvatar(
    fullName: string,
    nickname: string,
    gender: Gender,
    eyeColor: Colors,
    hairColor: Colors
  ): Avatar {
    const imagePath: string = this.returnImagePath(gender, eyeColor, hairColor);

    return Avatar.avatarBuilder()
      .setImagePath(imagePath)
      .setFullName(fullName)
      .setNickname(nickname)
      .setGender(gender)
      .setHairColor(hairColor)
      .setEyeColor(eyeColor)
      .build();
  }

  private returnImagePath(
    gender: Gender,
    eyeColor: Colors,
    hairColor: Colors
  ): string {
    if (gender && eyeColor && hairColor)
      return '' + hairColor + 'Hair' + eyeColor + 'Eye' + gender + '.jpg';
    else return 'genderNeutral.png';
  }
}
