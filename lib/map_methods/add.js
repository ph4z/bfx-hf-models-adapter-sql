'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

module.exports = async (db, { mapKey }, value) => {
  const id = idFromDocOrID(mapKey, value)

  await db.insert({
    ...value,
    mapKey: id
  })
}
