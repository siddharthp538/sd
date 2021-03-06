/* global describe, it, expect */
'use strict'
const { itemsFilePath } = require('../files')
const items = require(itemsFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/items').schema
const example = require('./examples/items').example

describe('items data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of items', () => {
    expect(items).not.toBe('')
  })
})

describe('test my items json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
