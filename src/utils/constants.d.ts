export interface IPage {
  id: string;
  title: string;
}

export interface IError {
  title: string;
  message: string;
}

export interface IChats {
  title: string;
  text: string;
  time?: string;
  count?: number;
}

export interface ImockUser { 
  first_name: string;
  second_name: string;
  login: string;
  display_name: string;
  avatar: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}

export interface IChatRootObject {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: ILastMessage;
}

export interface IInput {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  initialValue?: IUser[keyof IUser];
  autoComplete?: string;
}
