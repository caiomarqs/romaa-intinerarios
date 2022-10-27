import { MonthService } from "../../../lib/services"

const defaultMethods = {
    GET: 'GET'
}

const handler = async (req, res) => {
    const { body, query, method } = req
    const { userId, year } = query

    switch (method) {
        case defaultMethods.GET: {
            return res.status(200).json(
                await MonthService.readAllMonthsByUserIdAndYear(userId, year)
            )
        }

        default:
            res.setHeader('Allow', Object.entries(defaultMethods))
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler