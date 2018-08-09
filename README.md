# class-name

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/class-name.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/class-name.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/class-name.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/@m31271n/class-name.svg)](#)

> Convert virtual class into pratical class. Inspired by [react-functional-css-protips](https://github.com/chibicode/react-functional-css-protips).

## Install

```
$ npm install @m31271n/class-name
```

## Usage

```js
const makeCN = require('@m31271n/class-name');

const classMapping = {
  '-virtual-class-a': 'bold nowrap right-align',
  // One virtual class can reference another virtual class
  '-virtual-class-b': 'border-right m1 -virtual-class-a',
  '-virtual-class-c': 'px2',
};

const cn = makeCN(classMapping);
cn('-virtual-class-a'); // '-virtual-class-a bold nowrap right-align'
```

## API

### makeCN(classMapping)

* `classMapping`: Object

Returns `cn(...args)`.

### cn(...args)

Same API with [classnames](https://github.com/JedWatson/classnames). The only difference is that `cn(...args)` returns class list contains virtual class.
