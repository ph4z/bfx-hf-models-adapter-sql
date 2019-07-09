'use strict'

const create = require('./create')
const update = require('./update')
const find = require('./find')
const getAll = require('./get_all')
const get = require('./get')
const set = require('./set')
const rm = require('./rm')

module.exports = {
  create,
  update,
  find,
  getAll,
  get,
  set,
  rm
}
