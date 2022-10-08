import { getData } from "../../repository"

const readAllIntinerariosByUser = async (userId) => {
    const intinerarios = await getData('intinerarios')
    return intinerarios.filter(intinerario => intinerario.userId == userId)
}

export { readAllIntinerariosByUser }