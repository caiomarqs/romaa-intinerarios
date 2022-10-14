import { mongoConnection } from "../mongodb"

const collectionName = 'intinerario'

const createIntinerario = async (data, userId) => {

    const intinerario = {
        ...data,
        km: Number(data.km),
        userId
    }

    const collection = await mongoConnection(collectionName)

    return await collection.insertOne(intinerario)
}

export { createIntinerario }