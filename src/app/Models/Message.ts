import { Avatar } from './Avatar';

export class Message {
  public recipient: Avatar;

  constructor(public sender: Avatar, public message: string) {
    this.sender = sender;
    this.message = message;
  }
}
