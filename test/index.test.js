const test = require('node:test');
const assert = require('node:assert');
const { capitalize, kebabCase, truncate } = require('../src');

test('capitalize', () => assert.strictEqual(capitalize('hello'), 'Hello'));
test('kebabCase', () => assert.strictEqual(kebabCase('helloWorld foo_bar'), 'hello-world-foo-bar'));
test('truncate', () => assert.strictEqual(truncate('abcdefghij', 5), 'abcd…'));
