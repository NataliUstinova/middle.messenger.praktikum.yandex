import tpl from './tpl.hbs';
import './style.scss';




const chatHTML = (chats) => {
  return tpl(chats);
}

export default chatHTML;
