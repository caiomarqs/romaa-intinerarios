import { verifyData } from "../../../lib/repository"
import {
    createIntinerario,
    readAllIntinerariosByUser
} from "../../../lib/services/intinerario"

const defaultMethods = {
    GET: 'GET',
    POST: 'POST'
}

const handler = async (req, res) => {
    const { body, query, method } = req
    const { userId } = query

    await verifyData("intinerarios");

    switch (method) {
        case defaultMethods.GET:
            const intinerarios = await readAllIntinerariosByUser(userId)
            res.status(200).json(intinerarios)
            break
        case defaultMethods.POST:
            const intinerario = await createIntinerario(body, userId)

            if(!intinerario) {
                res.status(409).end("Intinerario already exists!")
                break
            }

            res.status(200).json(intinerario)
            break
        default:
            res.setHeader('Allow', Object.entries(defaultMethods))
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler