'use strict'

module.exports = async (db, model, doc) => {
  const { path, index, indexMatches } = model

  if (!index) {
    throw new Error('can\'t upsert, model missing index')
  }

  const insertSQL = db.insert(doc).toString()
  const whereRawSQL = indexMatches.map(fieldName => (
    `${path}.${fieldName} = '${doc[fieldName]}'`
  )).join(' AND ')

  const updateSQL = db
    .update(doc)
    .whereRaw(whereRawSQL)
    .toString()

  const query = [
    insertSQL,
    `ON CONFLICT (${model.index}) DO UPDATE SET`,
    updateSQL.replace(/^update\s.*\sset\s/i, '')
  ].join(' ')

  await db._knex.raw(query)

  return doc
}
