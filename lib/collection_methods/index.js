'use strict'

const find = require('./find')
const rmAll = require('./rm_all')
const insert = require('./insert')
const update = require('./update')
const getAll = require('./get_all')
const getInRange = require('./get_in_range')

module.exports = {
  find,
  rmAll,
  insert,
  update,
  getAll,
  getInRange
}
