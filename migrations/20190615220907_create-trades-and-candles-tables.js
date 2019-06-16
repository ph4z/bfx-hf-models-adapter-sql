// TODO: Auto-generate from model schemas
exports.up = function (knex, Promise) {
  return knex.schema.createTable('candles', function (table) {
    table.increments('id')

    table.decimal('open', 255).notNullable()
    table.decimal('high', 255).notNullable()
    table.decimal('low', 255).notNullable()
    table.decimal('close', 255).notNullable()
    table.decimal('vol', 255).notNullable()

    table.string('exchange', 32).notNullable()
    table.string('symbol', 11).notNullable()
    table.string('tf', 3).notNullable()

    table.bigint('mts').notNullable()
    table.text('exchangeData')
  }).createTable('trades', function (table) {
    table.increments('id')

    table.decimal('price', 255).notNullable()
    table.decimal('amount', 255).notNullable()
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
