import { Avatar, Colors, Gender } from '../Models/Avatar';

export class AvatarBuilder {
  private _fullName: string = '';
  private _nickname: string = '';
  private _gender: Gender;
  private _eyeColor: Colors;
  private _hairColor: Colors;
  private _imagePath: string;

  constructor() {}

  public build() {
    return new Avatar(this);
  }

  public setFullName(fullName: string): AvatarBuilder {
    this._fullName = fullName;
    return this;
  }

  public setNickname(nickname: string): AvatarBuilder {
    this._nickname = nickname;
    return this;
  }

  public setGender(gender: Gender): AvatarBuilder {
    this._gender = gender;
    return this;
  }

  public setEyeColor(eyeColor: Colors): AvatarBuilder {
    this._eyeColor = eyeColor;
    return this;
  }

  public setHairColor(hairColor: Colors): AvatarBuilder {
    this._hairColor = hairColor;
    return this;
  }

  public setImagePath(img: string): AvatarBuilder {
    this._imagePath = img;
    return this;
  }

  public get imagePath(): string {
    return this._imagePath;
  }

  public get hairColor(): Colors {
    return this._hairColor;
  }

  public get eyeColor(): Colors {
    return this._eyeColor;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public get nickname(): string {
    return this._nickname;
  }

  public get fullName(): string {
    return this._fullName;
  }
}
