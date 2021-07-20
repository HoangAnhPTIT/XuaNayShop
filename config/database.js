const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'XuaNayShop'

async function connectDatabase() {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  console.log('db', db)

  return db

}

module.exports = connectDatabase
