'use strict'

const whereQBuilder = require('../util/where_q_builder')

module.exports = async (db, model, criteria, {
  key,
  start,
  end
}, { orderBy, orderDirection } = {}) => {
  let q = whereQBuilder(db, criteria)
    .andWhere(key, '>=', start)
    .andWhere(key, '<=', end)

  if (orderBy && orderDirection) {
    q = q.orderBy(orderBy, orderDirection)
  }

  return q.select('*')
}
