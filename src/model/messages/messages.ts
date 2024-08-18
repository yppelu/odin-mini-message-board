import { MessageInterface } from '../types';
import Message from './Message';

export const messages: MessageInterface[] = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

export function addMessage(text: string, user: string): void {
  const newMessage = new Message(text, user);
  messages.push(newMessage);
}
