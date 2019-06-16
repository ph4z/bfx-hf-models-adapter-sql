'use strict'

module.exports = async (db, model, doc) => {
  await db.insert(doc)

  return doc
}
