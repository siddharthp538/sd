/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { cookingTimes } = require('../files')
const schema = require('./examples/cookingTimes').schema
const example = require('./examples/cookingTimes').example

describe('this test prevents to any issues and problems, also to break the structure of cookingTimes data', () => {
  it('cookingTimes data files returns object', () => {
    expect(cookingTimes).not.toBe('')
  })
})

describe('test cookingTimes json schema', () => {
  it('validates cookingTimes json', () => {
    expect(example).toMatchSchema(schema)
  })
})
