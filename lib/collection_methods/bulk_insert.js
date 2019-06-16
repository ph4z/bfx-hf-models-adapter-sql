'use strict'

module.exports = async (db, model, docs) => {
  return db._knex.transaction(trx => {
    return db
      .insert(docs)
      .transacting(trx)
      .then(trx.commit)
      .catch(trx.rollback)
  })
}
