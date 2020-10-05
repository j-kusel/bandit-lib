
import c from '../config/CONFIG.json';

var font_mixin = `
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');
    font-family: 'Work Sans', sans-serif;
`;

var button_mixin = `
    ${font_mixin}
    background-color: ${c.secondary};
    border: none;
    box-shadow: none;
    color: ${c.primary};
    text-align: center;    
    &:hover {
        text-shadow: 1px 1px 5px ${c.primary_shadow};
    }
`;

let form_mixin = [
    font_mixin,
    `border: none;
    width: 48px;
    padding: 2px;
    font-size: 8pt;

    &:focus {
        outline: none;
        border: none;
    }
`].join('\n');

let timing = '0.3s';
var transition_mixin = ['transition', '-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition']
    .reduce((acc, t) => `${acc}${t}: ${timing};\n`, '');

export { font_mixin, button_mixin, form_mixin, transition_mixin };
