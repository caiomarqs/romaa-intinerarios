const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI

let client;
let db;

const mongoConnection = async (collection) => {
    try {

        if(client && db) {
            return db.collection(collection)
        }

        client = new MongoClient(uri)
        await client.connect()

        db = client.db(process.env.MONGO_DB)
        return db.collection(collection)
    }
    catch {
        throw new Error("Db is down")
    }
}

export { mongoConnection }