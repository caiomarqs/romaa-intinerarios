const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI

const client = new MongoClient(uri)

const mongoConnection = async (collection) => {
    try {
        await client.connect()

        const db = client.db(process.env.MONGO_DB)
        return db.collection(collection)
    }
    catch {
        throw new Error("Db is down")
    }
}

export { mongoConnection }