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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = mithril;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(0);
/**
 * A material badge.
 *
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | icon      | boolean | false     | Treats the child element as a material icon definition |
 * | overlap   | boolean | false     | Make the badge overlap with its container |
 * | nobackground | boolean | false  | Applies open-circle effect to badge |
 * | data | string |   | Assigns string value to badge. This is transformed to data-badge attribute |
 * | data-badge | string |   | Assigns string value to badge |
 */
var Badge = (function () {
    function Badge() {
    }
    Badge.prototype.view = function (vnode) {
        // add data-badge if it is not already in vnode.attrs and vnode.attrs.data is set.
        var attrs = Object.assign({}, vnode.attrs, !vnode.attrs['data-badge'] && vnode.attrs.data ? { 'data-badge': vnode.attrs.data } : {});
        var view;
        if (attrs.icon) {
            view = 'div.material-icons.mdl-badge';
            delete attrs.icon;
        }
        else
            view = 'span.mdl-badge';
        if (attrs.overlap)
            view += '.mdl-badge--overlap';
        if (attrs.nobackground)
            view += '.mdl-badge--no-background';
        return m(view, attrs, vnode.children);
    };
    return Badge;
}());
exports.Badge = Badge;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(0);
/**
 * A materialize Button.
 *
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | raised    | boolean | false     | makes the button raised |
 * | ripple    | boolean | true      | adds the ripple effect to the button |
 * | fab       | boolean | false     | makes the button a floating action button, mutually exclusive of *raised* and *icon* |
 * | minifab   | boolean | false     | makes the button a mini floating action button, mutually excluive of *raised* and *icon* |
 * | icon      | boolean | false     | Applies icon (small plain circular) display effect, mutually exclusive of *raised*, *fab* and *minifab* |
 * | color     | string  | undefined | this makes the button colored. Valide values are:</br> colored: applies colored display effect (primary or accent color, depending on the type of button)</br> primary: applies primary color display effect</br> accent: applies accent color display effect |
 */
var Button = (function () {
    function Button() {
    }
    Button.prototype.view = function (vnode) {
        var classes = '.mdl-button.mdl-js-button';
        if (vnode.attrs.raised)
            classes += '.mdl-button--raised';
        if (vnode.attrs.ripple || vnode.attrs.ripple === undefined)
            classes += '.mdl-js-ripple-effect';
        if (vnode.attrs.fab && !vnode.attrs.raised)
            classes += '.mdl-button--fab';
        if (vnode.attrs.minifab && !vnode.attrs.raised) {
            if (vnode.attrs.fab === undefined)
                classes += '.mdl-button--fab';
            classes += '.mdl-button--mini-fab';
        }
        if (vnode.attrs.icon && !vnode.attrs.raised && !(vnode.attrs.fab || vnode.attrs.minifab))
            classes += '.mdl-button--icon';
        if (vnode.attrs.color === 'colored')
            classes += '.mdl-button--colored';
        if (vnode.attrs.color === 'primary')
            classes += '.mdl-button--primary';
        if (vnode.attrs.color === 'accent')
            classes += '.mdl-button--accent';
        return m((vnode.attrs.element || 'button') + classes, vnode.children);
    };
    return Button;
}());
exports.Button = Button;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(0);
/**
 * A material icon.
 * pass the name of the material icon to display as its child.
 *
 * * ### Example
 * ```javascript
 * m(Icon, 'autorenew');
 * ```
 * will display ![autorenew][https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_autorenew_black_18px.svg]
 */
var Icon = (function () {
    function Icon() {
    }
    Icon.prototype.view = function (vnode) {
        return m('i.material-icons', vnode.children);
    };
    return Icon;
}());
exports.Icon = Icon;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(0);
/**
 * Represents a material design spacer for laying out of elements.
 */
var LayoutSpacer = (function () {
    function LayoutSpacer() {
    }
    LayoutSpacer.prototype.view = function (_vnode) {
        return m('.mdl-layout-spacer');
    };
    return LayoutSpacer;
}());
exports.LayoutSpacer = LayoutSpacer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Button = __webpack_require__(2);
exports.Button = Button;
var Badge = __webpack_require__(1);
exports.Badge = Badge;
var Icon = __webpack_require__(3);
exports.Icon = Icon;
var Layout = __webpack_require__(4);
exports.Layout = Layout;
// polyfill for Object.assign.
if (typeof Object.assign != 'function') {
    Object.assign = function (target, _varArgs) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}


/***/ })
/******/ ]);
//# sourceMappingURL=ithildin.js.map