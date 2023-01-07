import tpl from './tpl.hbs';
import './style.scss';
import search from '../../components/Search/index';
import messageInput from "../../components/MessageInput";
import chatNameHeader from "../../components/ChatNameHeader";
import Messages from "../../components/Messages";

const chatHTML = (chats) => {
  return tpl(chats);
}

export default chatHTML;
