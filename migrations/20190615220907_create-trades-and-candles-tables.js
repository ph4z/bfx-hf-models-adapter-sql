exports.up = function (knex, Promise) {
  return knex.schema.createTable('candles', function (table) {
    table.increments('id')

    table.decimal('open', null).notNullable()
    table.decimal('high', null).notNullable()
    table.decimal('low', null).notNullable()
    table.decimal('close', null).notNullable()
    table.decimal('volume', null).notNullable()

    table.string('exchange', 32).notNullable()
    table.string('symbol', 11).notNullable()
    table.string('tf', 3).notNullable()

    table.string('key', 64).notNullable().unique()

    table.bigint('mts').notNullable()
    table.text('exchangeData')
  }).createTable('trades', function (table) {
    table.increments('id')

    table.decimal('price', null).notNullable()
    table.decimal('amount', null).notNullable()
    table.string('exchange', 32).notNullable()
    table.string('symbol', 11).notNullable()

    table.bigint('mts').notNullable()
    table.text('exchangeData')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('candles')
    .dropTable('trades')
}
