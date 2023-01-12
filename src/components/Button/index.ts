import * as Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button', tpl);

interface Props {
  buttonValue: string;
  buttonId: string;
}

export default (props: Props) => tpl(props);
