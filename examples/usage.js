'use strict'

process.env.DEBUG = '*'

const debug = require('debug')('bfx:hf:models:adapter-sql:examples:usage')
const HFDBSQLAdapter = require('../')
const { schema: DummySchema } = require('bfx-hf-ext-plugin-dummy')
const HFDB = require('bfx-hf-models')

const PSQL_CONNECTION = 'postgres://hf_testing:password@localhost:5432/hf_testing'

const db = new HFDB({
  schema: DummySchema,
  adapter: HFDBSQLAdapter({
    connection: PSQL_CONNECTION,
    clientType: 'pg'
  })
})

const run = async () => {
  const { Candle } = db
  const candles = await Candle.getAll()

  debug('read %d candles', candles.length)
}

try {
  run()
} catch (e) {
  debug('error: %s', e.stack)
}
