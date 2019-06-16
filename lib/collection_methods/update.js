'use strict'

const whereQBuilder = require('../util/where_q_builder')

// NOTE: only supports .andWhere()!
//       for more complex operations, use customOperation()
module.exports = async (db, model, criteria = [], data = {}) => {
  return whereQBuilder(db, criteria)
    .update(data)
    .select('*')
}
