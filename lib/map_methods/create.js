'use strict'

module.exports = async (db, { mapKey }, data) => {
  const key = mapKey(data)
  const doc = {
    ...data,
    mapKey: key,
  }

  await db.insert(doc)

  return doc
}
