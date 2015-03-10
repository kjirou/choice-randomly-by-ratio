# choose-randomly-by-ratio

[![npm version](https://badge.fury.io/js/choose-randomly-by-ratio.svg)](http://badge.fury.io/js/choose-randomly-by-ratio)
[![Build Status](https://travis-ci.org/kjirou/choose-randomly-by-ratio.svg?branch=master)](https://travis-ci.org/kjirou/choose-randomly-by-ratio)

Choose randomly a value by ratio from collection


## Usage

```
var chooseRandomlyByRatio = require('choose-randomly-by-ratio');

// This value will be 'x'(1.0/4.5) or 'y'(1.5/4.5) or 'z'(2.0/4.5)
var value = chooseRandomlyByRatio([['x', 1], ['y', 1.5], ['z', 2]]);

// It's possible to write like this
var value = chooseRandomlyByRatio({ x: 1, y: 1.5, z: 2 });
```


## Installation

```
npm install choose-randomly-by-ratio
```

Or, you can use in browser through the [browserify](https://github.com/substack/node-browserify).
