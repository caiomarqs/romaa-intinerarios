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

const readAllIntinerariosByUserAndDate = async (userId, month, year) => {

    const filter = {
        userId, 
        mes: RegExp(`^${month}$`, 'i'),
        ano: Number(year)
    }

    const collection = await mongoConnection(collectionName)
    return await collection.find(filter).sort({ dia: 1 }).toArray()
}

const readAllMonthsByUserId = async (userId) => {
    const filter = { userId }

    const collection = await mongoConnection(collectionName)
    return await collection.distinct('mes', filter)
}

const readAllYearsByUserId = async (userId) => {
    const filter = { userId }

    const collection = await mongoConnection(collectionName)
    return await collection.distinct('ano', filter)
}

export { 
    readIntinerario, 
    readAllIntinerariosByUser, 
    readAllIntinerariosByUserAndDate,
    readAllMonthsByUserId,
    readAllYearsByUserId
}