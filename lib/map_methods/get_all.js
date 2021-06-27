'use strict'

module.exports = async (db) => {
  console.log(db)
  return db.find()
}
