import tpl from './tpl.hbs';
import './style.scss';


export default ({title, id, label, type, placeholder}) => {
  return tpl({ title, id, label, type, placeholder});
}
