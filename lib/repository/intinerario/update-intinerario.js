import { mongoConnection } from "../mongodb"

const collectionName = 'intinerario'

const updateIntinerario = async (data, userId) => {

    const filter = {
        mes: data.mes,
        ano: data.ano,
        dia: data.dia,
        userId
    }

    const updateDocument = {
        $set: {
            km: Number(data.km),
        }
    }

    const collection = await mongoConnection(collectionName)

    return await collection.updateOne(filter, updateDocument)
}

export { updateIntinerario }