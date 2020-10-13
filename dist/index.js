module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/CONFIG.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"accent\":\"#A83000\",\"aux_primary\":\"#FAE4E8\",\"aux_secondary\":\"#301C0F\",\"secondary\":\"#F2EED8\",\"secondary_light2\":\"#F2EFE8\",\"secondary_light\":\"#F2F4E8\",\"primary\":\"#0D0D0D\",\"primary_shadow\":\"#9D8D8D\",\"WIDTH\":1200,\"HEIGHT\":800,\"FONT_DEFAULT_SIZE\":12,\"DEBUG_HEIGHT\":200,\"DEBUG_TEXT\":12,\"PANES_WIDTH\":10,\"WINDOW_PERCENTAGE\":0.8,\"DRAG_THRESHOLD_X\":10,\"FLAT_THRESHOLD\":10,\"NUDGE_THRESHOLD\":0.5,\"SNAP_THRESHOLD\":50,\"INST_HEIGHT\":100,\"SCROLL_SENSITIVITY\":100,\"ROLLOVER_TOLERANCE\":3,\"TIMESIG_PADDING\":5,\"TEMPO_PADDING\":5,\"TEMPO_PT\":8,\"TOOLBAR_WIDTH\":200,\"META_HEIGHT\":200,\"REHEARSAL_HEIGHT\":150,\"LOG_HEIGHT\":300,\"LOG_WIDTH\":200,\"TRACKING_HEIGHT\":20,\"TRACKING_PADDING\":{\"X\":20,\"Y\":5},\"CANVAS_PADDING\":20,\"INSERT_HEIGHT\":100,\"INSERT_PADDING\":4,\"INSERT_WIDTH\":250,\"EDITOR_HEIGHT\":100,\"EDITOR_PADDING\":4,\"EDITOR_WIDTH\":500,\"LOCK_HEIGHT\":20,\"PREVIEW_HEIGHT\":20,\"FOOTER_HEIGHT\":100,\"FOOTER_PADDING\":20,\"PPQ_OPTIONS\":[[24,\"default\"],[4,\"ableton live\"],[256,\"sibelius\"],[480,\"digital performer\"],[960,\"reaper\"],[1024,\"finale\"]],\"TRACK_HEIGHT\":100,\"PLAYBACK_HEIGHT\":25,\"DELTA_THRESHOLD\":5,\"PPQ_default\":48}");

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TBDropdown = exports.Lock = exports.AudioButton = exports.TBButton = exports.Panel = exports.Playback = exports.Submit = exports.Upload = exports.Footer = exports.Ext = exports.Edit = exports.Insert = exports.TrackingBar = exports.FormLabel = exports.FormInput = exports.StyledLink = exports.NewInst = exports.MixerRow = exports.MixerArrow = exports.PlusButton = exports.StyledInputGroup = exports.ArrowButton = exports.MixerButton = exports.Slider = exports.PanelHeader = exports.Module = exports.Splash = exports.mixins = exports.colors = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _styledComponents = _interopRequireDefault(__webpack_require__("styled-components"));

var _reactBootstrap = __webpack_require__("react-bootstrap");

var _mixins = __webpack_require__("./src/mixins.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var c = __webpack_require__("./config/CONFIG.json");

var _require = __webpack_require__("./config/CONFIG.json"),
    primary = _require.primary,
    secondary = _require.secondary,
    accent = _require.accent;

var colors = {
  primary: primary,
  secondary: secondary,
  accent: accent
}; // Form Components

exports.colors = colors;

var FormLabel = _styledComponents["default"].label.withConfig({
  displayName: "src__FormLabel",
  componentId: "dka653-0"
})(["color:black;", " font-size:0.75em;font-weight:bold;width:100px;"], _mixins.form_mixin);

exports.FormLabel = FormLabel;

var FormInput = _styledComponents["default"].input.withConfig({
  displayName: "src__FormInput",
  componentId: "dka653-1"
})(["", " padding:2px 4px;color:", ";background-color:", ";"], _mixins.form_mixin, c.secondary, c.primary);

exports.FormInput = FormInput;
var StyledInputGroup = (0, _styledComponents["default"])(_reactBootstrap.InputGroup).withConfig({
  displayName: "src__StyledInputGroup",
  componentId: "dka653-2"
})(["height:20px;margin:4px;"]);
exports.StyledInputGroup = StyledInputGroup;

var PlusButton = _styledComponents["default"].button.withConfig({
  displayName: "src__PlusButton",
  componentId: "dka653-3"
})(["background:transparent;border:0;", " ", ""], _mixins.transition_mixin, function (props) {
  return props.open ? "\n            position: absolute;\n            left: 75px;\n            transform: rotate(45deg);\n        " : "\n            position: absolute;\n            left: 0px;\n        ";
});

exports.PlusButton = PlusButton;

var ArrowButton = _styledComponents["default"].button.withConfig({
  displayName: "src__ArrowButton",
  componentId: "dka653-4"
})(["font-size:8pt;background-color:", ";border:1px solid ", ";padding:0px 4px;height:100%;"], c.secondary, c.primary); // Mixer Components


exports.ArrowButton = ArrowButton;

var MixerArrow = _styledComponents["default"].button.withConfig({
  displayName: "src__MixerArrow",
  componentId: "dka653-5"
})(["display:block;margin:-2px 0px -4px 0px;padding:0px;border:none;background:transparent;text-decoration:none;"]);

exports.MixerArrow = MixerArrow;

var MixerRow = _styledComponents["default"].tr.withConfig({
  displayName: "src__MixerRow",
  componentId: "dka653-6"
})([".arrows{visibility:hidden;width:6px;}&:hover{.arrows{visibility:visible;}}.flip{transform:rotate(180deg);}"]);

exports.MixerRow = MixerRow;

var MixerButton = _styledComponents["default"].button.withConfig({
  displayName: "src__MixerButton",
  componentId: "dka653-7"
})(["box-sizing:border-box;border:1px solid transparent;background-color:transparent;padding:0px;min-width:10px;width:15px;align-items:center;justify-content:center;margin:auto;cursor:pointer;&:hover{border:1px solid black;}"]);

exports.MixerButton = MixerButton;
var sliderThumb = "\n    -webkit-appearance: none;\n    border-radius: 1.3px 1.3px 0.5px 0.5px;\n    appearance: none;\n    height: 10px;\n    width: 3px;\n    cursor: pointer;\n    margin-top: -8px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: pink;\n";
var sliderTrack = "\n    width: 100%;\n    height: 2px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: white;\n    border-radius: 1.3px;\n";

var Slider = _styledComponents["default"].input.withConfig({
  displayName: "src__Slider",
  componentId: "dka653-8"
})(["-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;background:transparent;margin-left:10px;outline:none;&:focus{outline:none;}", " ", ""], ['-webkit-slider-thumb', '-moz-range-thumb', '-ms-thumb'].map(function (prefix) {
  return "&::".concat(prefix, " { ").concat(sliderThumb, " }");
}), ['-webkit-slider-runnable-track', '-moz-range-track', '-ms-track'].map(function (prefix) {
  return "&::".concat(prefix, " { ").concat(sliderTrack, " }");
}));

exports.Slider = Slider;

var Playback = _styledComponents["default"].button.withConfig({
  displayName: "src__Playback",
  componentId: "dka653-9"
})(["width:50px;z-index:50;height:", ";position:absolute;left:", " top:", " padding-top:0px;padding-bottom:0px;"], c.PLAYBACK_HEIGHT + 'px', function (props) {
  return props.x + 'px';
}, function (props) {
  return props.y + 'px';
});

exports.Playback = Playback;

var PanelHeader = _styledComponents["default"].h3.withConfig({
  displayName: "src__PanelHeader",
  componentId: "dka653-10"
})(["font-size:10px;border-bottom:1px solid ", ";width:80%;margin-bottom:4px;"], c.primary);

exports.PanelHeader = PanelHeader;

var Panel = _styledComponents["default"].div.withConfig({
  displayName: "src__Panel",
  componentId: "dka653-11"
})(["position:absolute;background-color:", ";text-align:center;width:100%;padding:0px;"], c.secondary);

exports.Panel = Panel;

var NewInst = _styledComponents["default"].div.withConfig({
  displayName: "src__NewInst",
  componentId: "dka653-12"
})(["position:absolute;width:", "px;left:", "px;top:", "px;height:", "px;border:none;color:", ";background-color:none;font-size:10pt;z-index:50;button{color:", ";}input{border-bottom:1px solid black;}"], c.PANES_WIDTH, function (props) {
  return props.x;
}, function (props) {
  return props.y;
}, function (props) {
  return props.height;
}, c.secondary, c.primary);

exports.NewInst = NewInst;

var Splash = _styledComponents["default"].span.withConfig({
  displayName: "src__Splash",
  componentId: "dka653-13"
})(["", " font-size:48pt;"], _mixins.font_mixin);

exports.Splash = Splash;

var Footer = _styledComponents["default"].div.withConfig({
  displayName: "src__Footer",
  componentId: "dka653-14"
})(["", " .flavor{font-size:48pt;}padding-left:", "px;"], _mixins.font_mixin, c.FOOTER_PADDING);

exports.Footer = Footer;

var AudioButton = _styledComponents["default"].button.withConfig({
  displayName: "src__AudioButton",
  componentId: "dka653-15"
})(["position:absolute;&.btn-group.btn{position:fixed;}margin:0px;left:", "px;top:", "px;width:", "px;&:hover{width:", "px;}padding:0px;height:", "px;border:none;border-radius:0px;background-color:#FFFFCC;"], function (props) {
  return props.x;
}, function (props) {
  return props.y;
}, c.PANES_WIDTH, c.PANES_WIDTH + 20, c.TRACK_HEIGHT / 3);

exports.AudioButton = AudioButton;

var Ext = _styledComponents["default"].a.withConfig({
  displayName: "src__Ext",
  componentId: "dka653-16"
})(["text-decoration:none;margin:5px;color:red;display:inline-block;"]); // Bottom bar components


exports.Ext = Ext;

var TrackingBar = _styledComponents["default"].div.withConfig({
  displayName: "src__TrackingBar",
  componentId: "dka653-17"
})(["position:absolute;height:", "px;width:", "px;", " ", " bottom:", "px;z-index:50;"], c.TRACKING_HEIGHT, c.EDITOR_WIDTH, function (props) {
  return props.left ? "left: ".concat(props.left, "px;") : null;
}, function (props) {
  return props.right ? "right: ".concat(props.right, "px;") : null;
}, c.FOOTER_HEIGHT);

exports.TrackingBar = TrackingBar;

var Insert = _styledComponents["default"].div.withConfig({
  displayName: "src__Insert",
  componentId: "dka653-18"
})(["position:absolute;bottom:", "px;left:", "px;z-index:50;button{", " ", " width:18px;}"], c.FOOTER_HEIGHT + c.TRACKING_HEIGHT, function (props) {
  return props.left;
}, _mixins.button_mixin, _mixins.form_mixin);

exports.Insert = Insert;

var Edit = _styledComponents["default"].div.withConfig({
  displayName: "src__Edit",
  componentId: "dka653-19"
})(["position:absolute;top:", "px;left:", "px;width:", "px;input{margin:0px 6px;width:28px;background-color:initial;}z-index:50;"], function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.width;
});

exports.Edit = Edit;

var StyledLink = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledLink",
  componentId: "dka653-20"
})(["color:red;font-weight:bold;"]);

exports.StyledLink = StyledLink;

var TBButton = _styledComponents["default"].button.withConfig({
  displayName: "src__TBButton",
  componentId: "dka653-21"
})(["", " ", " &:hover{", "}padding:0px;"], _mixins.button_mixin, _mixins.transition_mixin, _mixins.transition_mixin);

exports.TBButton = TBButton;

var Module = _styledComponents["default"].div.withConfig({
  displayName: "src__Module",
  componentId: "dka653-22"
})(["display:block;float:left;width:250px;height:100%;"]);

exports.Module = Module;
var Upload = (0, _styledComponents["default"])(TBButton).withConfig({
  displayName: "src__Upload",
  componentId: "dka653-23"
})(["padding-right:10px;font-size:10px;height:100%;&:focus{outline:none;}"]);
exports.Upload = Upload;
var Submit = (0, _styledComponents["default"])(TBButton).withConfig({
  displayName: "src__Submit",
  componentId: "dka653-24"
})(["padding:0px 4px;font-size:10px;float:right;margin:", "px;&:focus{outline:none;}"], 2);
exports.Submit = Submit;

var transitions = function transitions(apply) {
  return ['-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition'].reduce(function (acc, t) {
    return "".concat(acc).concat(t, "-property: ").concat(apply, ";\n");
  }, '');
};

var Lock = _styledComponents["default"].button.withConfig({
  displayName: "src__Lock",
  componentId: "dka653-25"
})(["width:", "px;height:", "px;", " border:none;border-left:1px solid ", ";color:", ";background-color:", ";text-align:center;&:focus{outline:none;}"], c.LOCK_HEIGHT, c.LOCK_HEIGHT, transitions('none'), function (props) {
  return props.checked ? c.primary : c.secondary;
}, function (props) {
  return props.checked ? c.primary : c.secondary;
}, function (props) {
  return props.checked ? c.secondary : 'initial';
});

exports.Lock = Lock;
var TBToggle = (0, _styledComponents["default"])(_reactBootstrap.Dropdown.Toggle).withConfig({
  displayName: "src__TBToggle",
  componentId: "dka653-26"
})(["height:40px;&.dropdown-toggle{", "}&.btn.btn-c.primary.dropdown-toggle{", " color:", ";background-color:", ";};&.btn.btn-c.primary.dropdown-toggle:focus{", " color:", ";background-color:", ";};&.btn.btn-c.primary.dropdown-toggle:hover{};&.btn.btn-c.primary.dropdown-toggle:active{", " color:", ";background-color:", ";};"], _mixins.button_mixin, _mixins.button_mixin, c.primary, c.secondary, _mixins.button_mixin, c.secondary, c.primary, _mixins.button_mixin, c.secondary, c.primary);
var TBDropdown = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown, {
    onSelect: props.onSelect
  }, /*#__PURE__*/_react["default"].createElement(TBToggle, null, props.toggle), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown.Item, null, "hello")));
}).withConfig({
  displayName: "src__TBDropdown",
  componentId: "dka653-27"
})(["&.toggle-dropdown{background-color:red;}color:red;padding:5px 6px;border:none;border-radius:0px;background-color:", ";text-align:center;width:100%;"], c.secondary);
exports.TBDropdown = TBDropdown;
var mixins = {
  font_mixin: _mixins.font_mixin,
  button_mixin: _mixins.button_mixin,
  form_mixin: _mixins.form_mixin,
  transition_mixin: _mixins.transition_mixin
};
exports.mixins = mixins;

/***/ }),

/***/ "./src/mixins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition_mixin = exports.form_mixin = exports.button_mixin = exports.font_mixin = void 0;

var _CONFIG = _interopRequireDefault(__webpack_require__("./config/CONFIG.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var font_mixin = "\n    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');\n    font-family: 'Work Sans', sans-serif;\n";
exports.font_mixin = font_mixin;
var button_mixin = "\n    ".concat(font_mixin, "\n    background-color: ").concat(_CONFIG["default"].secondary, ";\n    border: none;\n    box-shadow: none;\n    color: ").concat(_CONFIG["default"].primary, ";\n    text-align: center;    \n    &:hover {\n        text-shadow: 1px 1px 5px ").concat(_CONFIG["default"].primary_shadow, ";\n    }\n");
exports.button_mixin = button_mixin;
var form_mixin = [font_mixin, "border: none;\n    width: 48px;\n    padding: 2px;\n    font-size: 8pt;\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n"].join('\n');
exports.form_mixin = form_mixin;
var timing = '0.3s';
var transition_mixin = ['transition', '-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition'].reduce(function (acc, t) {
  return "".concat(acc).concat(t, ": ").concat(timing, ";\n");
}, '');
exports.transition_mixin = transition_mixin;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });