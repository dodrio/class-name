'use strict';

const classNames = require('classnames');

function makeCN(classMapping = {}) {
  return function convertVirtualClassnames(...args) {
    return classNames(args)
      .split(' ')
      .map(
        className =>
          // recursively convert.
          // return both functional and virtual classes
          classMapping[className]
            ? `${className} ${convertVirtualClassnames(
                classMapping[className]
              )}`
            : className
      )
      .join(' ');
  };
}

module.exports = makeCN;
