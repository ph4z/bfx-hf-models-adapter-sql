'use strict'

const idFromDocOrID = require('../util/id_from_doc_or_id')

module.exports = async (db, { mapKey }, docOrID) => {
  const id = idFromDocOrID(mapKey, docOrID)

  return db.where({ mapKey: id }).del()
}
