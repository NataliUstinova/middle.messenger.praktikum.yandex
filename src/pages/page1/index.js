import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.css';
//import Button from '../../components/Button';

Handlebars.registerPartial('page1', tpl);

export default (props = {}) => {
	return tpl(props);
}
