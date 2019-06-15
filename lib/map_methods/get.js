const _isObject = require('lodash/isObject')

module.exports = async (db, { mapKey }, docOrID) => {
  const id = _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID

  return db.where({ mapKey: id }).limit(1).select('*')
}
