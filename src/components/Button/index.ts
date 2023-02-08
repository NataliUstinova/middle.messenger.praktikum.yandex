import './style.scss';
import Block from "../../utils/Block";

class Button extends Block<{ buttonValue: string, buttonId: string; }> {
  protected render() {
    return this.compile(context => `
      <button 
        id=${context.buttonId}
        type="submit"
        class="button">
        ${context.buttonValue}
      </button>
    `, this.props);
  }
}

export default Button;

// const myBlock = new Button({ buttonValue: 'Hello World', buttonId: 'myButton' });
//
// // @ts-ignore
// document.body.appendChild(myBlock.element);
