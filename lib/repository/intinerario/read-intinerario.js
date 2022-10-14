import { mongoConnection } from "../mongodb"

const collectionName = 'intinerario'

const readIntinerario = async (data, userId) => {

    const filter = {
        mes: data.mes,
        ano: data.ano,
        dia: data.dia,
        userId
    }

    const collection = await mongoConnection(collectionName)
    return await collection.findOne(filter)
}

const readAllIntinerariosByUser = async (userId) => {

    const filter = { userId }

    const collection = await mongoConnection(collectionName)
    return await collection.find(filter).sort({ dia: 1 }).toArray()
}

export { readIntinerario, readAllIntinerariosByUser }