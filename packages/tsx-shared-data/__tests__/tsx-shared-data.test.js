'use strict';

const tsxSharedData = require('..');
const assert = require('assert').strict;

assert.strictEqual(tsxSharedData(), 'Hello from tsxSharedData');
console.info("tsxSharedData tests passed");
