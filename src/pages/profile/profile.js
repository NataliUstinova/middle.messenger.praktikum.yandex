import tpl from './tpl.hbs';
import './style.scss';
import profileForm from "../../components/ProfileForm";
import separator from "../../components/Separator";
import backSection from "../../components/BackSection";

const profileHTML = ({user, inputs}) => {
  return tpl({user, inputs});
}

export default profileHTML;
