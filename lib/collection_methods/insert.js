module.exports = async (db, {}, doc) => {
  await db.insert(doc)

  return doc
}
