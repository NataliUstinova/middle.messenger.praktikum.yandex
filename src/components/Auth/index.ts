// import tpl from './tpl.hbs';
import './style.scss';
import Button from "../Button";
import Block from "../../utils/Block";


// const Auth =  ({title, inputs, buttonId, buttonValue, text, redirectId}) => {
//   return tpl({title, inputs, buttonId, buttonValue, text, redirectId});
// }

class Auth extends Block<{ title: string, inputs: Array<{id: string, label: string, type: string, placeholder: string, autocomplete: string}>, buttonId: string, buttonValue: string, text: string, redirectId: string}> {
  protected render() {
    return this.compile(context => `
      <div class="container">
        <div class="auth">
          <h2 class="auth__title">${context.title}</h2>
          <form class="auth-form">
            <div>
              {{#each inputs}}
                <div class="auth-form__field">
                  <label class="auth-form__label" for={{this.id}}>{{this.label}}</label>
                  <input class="auth-form__input" id={{this.id}} type={{this.type}} name={{this.id}} placeholder={{this.placeholder}} autocomplete={{this.autocomplete}}>
                </div>
              {{/each}}
            </div>
            <div class="auth-form__buttons">
                <Button buttonId=${context.buttonId} buttonValue=${context.buttonValue} />
            <a class="auth-form__text" id="${context.redirectId}">${context.text}</a>
            </div>
          </form>
        </div>
        <a class="error__link toMain" id="toMain">Назад на главную</a>
      </div>
    `, this.props);
  }
}

export default Auth;
