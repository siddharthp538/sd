/* global describe, it, expect */
'use strict'

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { typesFile } = require('../files')
const types = require(typesFile)

describe('types data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of types', () => {
    expect(types).not.toBe('')
  })
})
const schema = require('./examples/types').schema
const example = require('./examples/types').example

describe('types json schema testing', () => {
  it('validates type json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
