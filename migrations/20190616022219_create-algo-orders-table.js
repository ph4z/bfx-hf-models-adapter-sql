exports.up = function (knex, Promise) {
  return knex.schema.createTable('algo_orders', function (table) {
    table.increments('id')

    table.string('mapKey', 64).notNullable()
    table.string('gid', 32).notNullable()
    table.string('algoID', 32).notNullable()
    table.text('state').notNullable()
    table.bool('active').notNullable()

    table.text('exchangeData')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('algo_orders')
}
