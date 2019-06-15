/**
 * Generates a query chaining multiple where/andWhere clauses.
 *
 * @param {Object} db - knex instance
 * @param {Array[]} criteria
 * @return {Object} q - query
 */
module.exports = (db, criteria = []) => {
  let q = db

  if (criteria.length === 1) {
    q = q.where(...criteria)
  } else {
    for (let i = 0; i < criteria.length; i += 1) {
      q = i === 0
        ? q.where(...criteria[i])
        : q.andWhere(...criteria[i])
    }
  }

  return q
}