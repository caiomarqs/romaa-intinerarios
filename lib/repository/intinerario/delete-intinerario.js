import { mongoConnection } from "../mongodb"

const collectionName = 'intinerario'

const delteIntinerario = async (data, userId) => {

    const filter = {
        mes: data.mes,
        ano: data.ano,
        dia: data.dia,
        userId
    }

    const collection = await mongoConnection(collectionName)

    return await collection.deleteOne(filter)
}

export { delteIntinerario }