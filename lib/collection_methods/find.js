'use strict'

const whereQBuilder = require('../util/where_q_builder')

// NOTE: only supports .andWhere()!
//       for more complex operations, use customOperation()
module.exports = async (db, {}, criteria = []) => {
  return whereQBuilder(db, criteria).select('*')
}
