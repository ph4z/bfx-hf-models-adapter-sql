'use strict'

/**
 * Remove all rows from the table
 *
 * @param {KnexTableInstance} db
 * @return {number} affectedRows
 */
module.exports = async (db) => {
  return db.del()
}
