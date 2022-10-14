import { mongoConnection } from "../mongodb"

const collectionName = 'users'

const readUserByName = async (name) => {
    const collection = await mongoConnection(collectionName)
    return await collection.findOne({ username: name })
}

export { readUserByName }