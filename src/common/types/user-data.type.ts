import { MessageData } from "./message-data.type";

export interface UserData {
  userID: number;
  userImg: string;
  userName: string;
  messages: Array<MessageData>;
}