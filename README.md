## *SQL Adapter for the Honey Framework DB
This is an adapter around **knex** for the Bitfinex Honey Framework. To use, initialize an instance of the `bfx-hf-models` database with it as an adapter.

Example:

```js
const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const PSQL_CONNECTION = '...'

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBSQLAdapter({
    connection: PSQL_CONNECTION,
    clientType: 'pg'
  }),
})

const { Candle } = db
const candles = await Candle.getAll()

console.log(`read ${candles.length} candles`)
```