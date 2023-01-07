import tpl from './tpl.hbs';
import './style.scss';
import search from '../../components/Search/index';
import messageInput from "../../components/MessageInput";



const chatHTML = (chats) => {
  return tpl(chats);
}

export default chatHTML;
