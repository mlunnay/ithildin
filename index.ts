import * as Button from './src/button';
import * as Badge from './src/badge';
import * as Icon from './src/icon';
import * as Layout from './src/layout';
import * as Chip from './src/chip';
import * as ProgressBar from './src/progressBar';
import * as Spinner from './src/spinner';
import * as Menu from './src/menu';
import * as Slider from './src/slider';
import * as Snackbar from './src/snackbar';

// polyfill for Object.assign.
if (typeof (<any>Object).assign != 'function') {
  (<any>Object).assign = function(target: any, _varArgs: any) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
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

export {
    Button,
    Badge,
    Icon,
    Layout,
    Chip,
    ProgressBar,
    Spinner,
    Menu,
    Slider,
    Snackbar
}