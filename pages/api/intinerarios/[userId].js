import { IntinerarioService } from "../../../lib/services"

const defaultMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const handler = async (req, res) => {
    const { body, query, method } = req
    const { userId, month, year } = query

    switch (method) {
        case defaultMethods.GET: {
            return res.status(200).json(
                await IntinerarioService
                    .readAllIntinerariosByUserAndDate(userId, month, year)
            )
        }

        case defaultMethods.POST: {
            const postIntinerario = await IntinerarioService.createIntinerario(body, userId)

            if (!postIntinerario) {
                return res.status(409).end("Intinerario already exists!")
            }

            return res.status(200).json(postIntinerario)
        }

        case defaultMethods.PUT: {
            const putIntinerario = await IntinerarioService.updateIntinerario(body, userId)

            if (!putIntinerario) {
                return res.status(409).end("Intinerario not exists!")

            }
            return res.status(200).json(putIntinerario)
        }

        case defaultMethods.DELETE: {
            const delIntinerario = await IntinerarioService.deleteIntinerario(body, userId)

            if (!delIntinerario) {
                return res.status(409).end("Intinerario not exists!")

            }

            return res.status(204).json()
        }

        default:
            res.setHeader('Allow', Object.entries(defaultMethods))
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler