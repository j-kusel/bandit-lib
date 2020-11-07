import React from 'react';
import styled from 'styled-components';
import { Dropdown, InputGroup } from 'react-bootstrap';
import { font_mixin, button_mixin, form_mixin, transition_mixin } from './mixins';

const c = require('../config/CONFIG.json');
const { primary, secondary, accent, contrast, contrast_light, contrast_lighter } = require('../config/CONFIG.json');
const colors = { primary, secondary, accent, contrast, contrast_light, contrast_lighter };



// Form Components
const FormLabel = styled.label`
    color: black;
    ${form_mixin}
    font-size: 0.75em;
    font-weight: bold;
    width: 100px;
`;

const FormInput = styled.input`
    ${form_mixin}
    padding: 2px 4px;
    color: ${c.secondary};
    background-color: ${c.primary};
`;

const StyledInputGroup = styled(InputGroup)`
    height: 20px;
    margin: 4px;
`;

var PlusButton = styled.button`
    background: transparent;
    border: 0;
    ${transition_mixin}
    ${props => 
        props.open ? `
            position: absolute;
            left: 75px;
            transform: rotate(45deg);
        ` : `
            position: absolute;
            left: 0px;
        `
    }
`;

var ArrowButton = styled.button`
    font-size: 8pt;
    background-color: ${c.secondary};
    border: 1px solid ${c.primary};
    padding: 0px 4px;
    height: 100%;
`;



// Mixer Components
var MixerArrow = styled.button`
    display: block;
    margin: -2px 0px -4px 0px;
    padding: 0px;
    border: none;
    background: transparent;
    text-decoration: none;
`;

var MixerRow = styled.tr`
    .arrows {
        visibility: hidden;
        width: 6px;
    }
    &:hover {
        .arrows {
            visibility: visible;
        }
    }
    .flip {
        transform: rotate(180deg);
    }
`;

var MixerButton = styled.button`
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 0px;
    min-width: 10px;
    width: 15px;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
`
let sliderThumb = `
    -webkit-appearance: none;
    border-radius: 1.3px 1.3px 0.5px 0.5px;
    appearance: none;
    height: 10px;
    width: 3px;
    cursor: pointer;
    margin-top: -8px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: pink;
`;

let sliderTrack = `
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: white;
    border-radius: 1.3px;
`;

var Slider = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: transparent;
    margin-left: 10px;
    outline: none;
    &:focus {
        outline: none;
    }

    ${['-webkit-slider-thumb', '-moz-range-thumb', '-ms-thumb']
        .map(prefix => `&::${prefix} { ${sliderThumb} }`)}
    ${['-webkit-slider-runnable-track', '-moz-range-track', '-ms-track']
        .map(prefix => `&::${prefix} { ${sliderTrack} }`)}
`;

var Playback = styled.button`
    width: 50px;
    z-index: 50;
    height: ${c.PLAYBACK_HEIGHT + 'px'};
    position: absolute;
    left: ${props => props.x + 'px'}
    top: ${props => props.y + 'px'}
    padding-top: 0px;
    padding-bottom: 0px;
`;

var PanelHeader = styled.h3`
    font-size: 10px;
    border-bottom: 1px solid ${c.primary};
    width: 80%;
    margin-bottom: 4px;
`;

var Panel = styled.div`
    position: absolute;
    background-color: ${c.secondary};
    text-align: center;    
    width: 100%;
    padding: 0px;
`;

var NewInst = styled.div`
    position: absolute;
    width: ${c.PANES_WIDTH}px;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    height: ${props => props.height}px;
    border: none;
    color: ${c.secondary};
    background-color: none;
    font-size: 10pt;
    z-index: 50;

    button {
        color: ${c.primary};
    }

    input {
        border-bottom: 1px solid black;
    }
`;

var Splash = styled.span`
    ${font_mixin}
    font-size: 48pt;
`;

var Footer = styled.div`
    ${font_mixin}
    .flavor {
        font-size: 48pt;
    }
    padding-left: ${c.FOOTER_PADDING}px;
`;

var AudioButton = styled.button`
    position: absolute;
    &.btn-group.btn {
        position: fixed;
    }
    margin: 0px;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    width: ${c.PANES_WIDTH}px;
    &:hover {
        width: ${c.PANES_WIDTH + 20}px;
    }
    padding: 0px;
    height: ${c.TRACK_HEIGHT/3}px;
    border: none;
    border-radius: 0px;
    background-color: #FFFFCC;
`;

var Ext = styled.a`
    text-decoration: none;
    margin: 5px;
    color: red;
    display: inline-block;
`;


// Bottom bar components
var TrackingBar = styled.div`
    position: absolute;
    height: ${c.TRACKING_HEIGHT}px;
    width: ${c.EDITOR_WIDTH}px;
    ${props => props.left ? `left: ${props.left}px;` : null}
    ${props => props.right ? `right: ${props.right}px;` : null}
    bottom: ${c.FOOTER_HEIGHT}px;
    
    z-index: 50;
`;

var Insert = styled.div`
    position: absolute;
    bottom: ${c.FOOTER_HEIGHT + c.TRACKING_HEIGHT}px;
    left: ${props => props.left}px;
    z-index: 50;

    button {
        ${button_mixin}
        ${form_mixin}
        width: 18px;
    }
`;

var Edit = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    input {
        margin: 0px 6px;
        width: 28px;
        background-color: initial;
    }
    z-index: 50;
`;

const StyledLink = styled.button`
    color: red;
    font-weight: bold;
`;



var TBButton = styled.button`
    ${button_mixin}
    ${transition_mixin}
    &:hover {
        ${transition_mixin}
    }
    padding: 0px;
`;

var Module = styled.div`
    display: block;
    float: left;
    width: 250px;
    height: 100%;
`;

var Upload = styled(TBButton)`
    padding-right: 10px;
    font-size: 10px;
    height: 100%;
    &:focus {
        outline: none;
    }
`;

var Submit = styled(TBButton)`
    padding: 0px 4px;
    font-size: 10px;
    float: right;
    margin: ${2}px;
    &:focus {
        outline: none;
    }
`;

let transitions = (apply) => ['-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition']
    .reduce((acc, t) => `${acc}${t}-property: ${apply};\n`, '');

var Lock = styled.button`
    width: ${c.LOCK_HEIGHT}px;
    height: ${c.LOCK_HEIGHT}px;
    ${transitions('none')}
    border: none;
    border-left: 1px solid ${props => props.checked ? c.primary : c.secondary};
    color: ${props => props.checked ? c.primary : c.secondary};
    background-color: ${props => props.checked ? c.secondary : 'initial'};
    text-align: center;    
    &:focus {
        outline: none;
    }
`;


var TBToggle = styled(Dropdown.Toggle)`
    height: 40px;
    &.dropdown-toggle {
        ${button_mixin}
    }

    &.btn.btn-c.primary.dropdown-toggle {
        ${button_mixin}
        color: ${c.primary};
        background-color: ${c.secondary};
    };

    &.btn.btn-c.primary.dropdown-toggle:focus {
        ${button_mixin}
        color: ${c.secondary};
        background-color: ${c.primary};
    };

    &.btn.btn-c.primary.dropdown-toggle:hover {
    };

    &.btn.btn-c.primary.dropdown-toggle:active {
        ${button_mixin}
        color: ${c.secondary};
        background-color: ${c.primary};
    };
`;

var TBDropdown = styled(props => (
    <Dropdown 
    classNames={props.classNames}
 onSelect={props.onSelect}>
      <TBToggle>
        {props.toggle}  
      </TBToggle>
      <Dropdown.Menu>
        { props.menuItems.map(drop => 
            (<Dropdown.Item key={drop.eventKey} eventKey={drop.eventKey}>{drop.text}</Dropdown.Item>)
        )}
      </Dropdown.Menu>
    </Dropdown>
))`
    .dropdown-toggle {
        background-color: red;
    }
    color: red;
    padding: 5px 6px;
    border: none;
    border-radius: 0px;
    background-color: ${c.contrast};
    text-align: center;    
    width: 100%;
`;


const mixins = {
    font_mixin,
    button_mixin,
    form_mixin,
    transition_mixin
};

export { colors, mixins, Splash, Module, PanelHeader, Slider, MixerButton, ArrowButton, StyledInputGroup, PlusButton, MixerArrow, MixerRow, NewInst, StyledLink, FormInput, FormLabel, TrackingBar, Insert, Edit, Ext, Footer, Upload, Submit, Playback, Panel, TBButton, AudioButton, Lock, TBDropdown };
