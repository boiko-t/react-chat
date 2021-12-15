export interface Message {
  _id: string;
  from: string;
  to: string;
  createdAt: Date;
  text: string;
}

export interface Conversation {
  _id: string;
  name: string;
  picture: string;
  members: string[];
  messages: Message[];
}
