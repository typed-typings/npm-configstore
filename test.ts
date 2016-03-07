/// <reference path="bundle.d.ts" />

import ConfigStore = require('configstore')
import assert = require('assert')

const store = new ConfigStore('random-package-name')

store.set('foo.bar', true)

assert.equal(store.get('foo.bar'), true)
assert.deepEqual(store.all, { foo: { bar: true } })

store.all = {}

console.log(store.path)