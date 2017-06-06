export * from './src/button';
export * from './src/badge';
export * from './src/icon';
export * from './src/layout';
export * from './src/chip';
export * from './src/progressBar';
export * from './src/spinner';
export * from './src/menu';
export * from './src/slider';
export * from './src/snackbar';
export * from './src/checkbox';
export * from './src/icontoggle';
export * from './src/radio';
export * from './src/switch';
export * from './src/datatable';
export * from './src/textfield';
export * from './src/tooltip';

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