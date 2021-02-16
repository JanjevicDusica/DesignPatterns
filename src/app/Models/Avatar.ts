import { AvatarBuilder } from '../Patterns/AvatarBuilder';

export enum Colors {
  brown = 'Brown',
  blue = 'Blue',
}

export enum Gender {
  man = 'man',
  woman = 'woman',
}

export class Avatar {
  public fullName: string;
  public nickname: string;
  public gender: Gender;
  public eyeColor: Colors;
  public hairColor: Colors;
  public imagePath: string;

  constructor(private avatarBuilder: AvatarBuilder) {
    this.eyeColor = avatarBuilder.eyeColor;
    this.fullName = avatarBuilder.fullName;
    this.gender = avatarBuilder.gender;
    this.hairColor = avatarBuilder.hairColor;
    this.imagePath = avatarBuilder.imagePath;
    this.nickname = avatarBuilder.nickname;
  }

  public static avatarBuilder(): AvatarBuilder {
    return new AvatarBuilder();
  }
}
