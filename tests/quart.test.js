/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('../filesObjects')

const schema = require('./examples/quart').schema
const example = require('./examples/quart').example

describe('this test prevents to any issues and problems, also to break the structure of quart data', () => {
  it('quart data files returns object', () => {
    expect(staticData.quart).not.toBe('')
  })
})

describe('testng for quart json data schema', () => {
  it('validates quart json-schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
