import { MessageInterface } from '../types';

export default class Message implements MessageInterface {
  text: string;
  user: string;
  added: Date;

  constructor(text: string, user: string) {
    this.text = text;
    this.user = user;
    this.added = new Date();
  }
}
