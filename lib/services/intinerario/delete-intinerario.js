import { writeData } from "../../repository"
import { readAllIntinerariosByUser, validateIninerario } from "./read-intinerario"

const deleteIntinerario = async (data, userId) => {
    let intinerarios = await readAllIntinerariosByUser(userId)

    const validateData = validateIninerario(intinerarios, data, userId, userId)

    if (validateData === undefined) {
        return false
    }

    intinerarios = intinerarios.filter(intinerario => !(
        intinerario.mes == data.mes &&
        intinerario.ano == data.ano &&
        intinerario.dia == data.dia
    ))

    await writeData('intinerarios', intinerarios)

    return true
}

export { deleteIntinerario }