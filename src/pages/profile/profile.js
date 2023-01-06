import tpl from './tpl.hbs';
import './style.scss';
import profileForm from "../../components/ProfileForm";
import separator from "../../components/Separator";

const profileHTML = ({user, profileInputs}) => {
  return tpl({user, profileInputs});
}

export default profileHTML;
