'use strict'

const whereQBuilder = require('../util/where_q_builder')

module.exports = async (db, {}, criteria, { key, start, end }) => {
  return whereQBuilder(db, criteria)
    .andWhere(key, '>=', start)
    .andWhere(key, '<=', end)
    .select('*')
}
