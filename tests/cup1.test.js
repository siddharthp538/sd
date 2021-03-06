/* global describe, it, expect */
'use strict'
const {
  matchers
} = require('jest-json-schema')
expect.extend(matchers)

const {
  cup1
} = require('../filesObjects')

const schema = require('./examples/cup1').schema
const example = require('./examples/cup1').example

describe('this test prevents to any issues and problems, also to break the structure of cup1 data', () => {
  it('cup1 data files returns object', () => {
    expect(cup1).not.toBe('')
  })
})

describe('test cup1 json schema', () => {
  it('validates my jason', () => {
    expect(example).toMatchSchema(schema)
  })
})
