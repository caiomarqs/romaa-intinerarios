import { writeData } from "../../repository"
import { readAllIntinerariosByUser, validateIninerario } from "./read-intinerario"

const updateIntinerario = async (data, userId) => {
    let intinerarios = await readAllIntinerariosByUser(userId)

    const validateData = validateIninerario(intinerarios, data, userId)

    if (validateData === undefined) {
        return false
    }

    intinerarios = intinerarios.filter(intinerario => !(
        intinerario.mes == data.mes &&
        intinerario.ano == data.ano &&
        intinerario.dia == data.dia
    ))

    const intinerario = {
        ...data,
        km: Number(data.km),
        userId
    }

    intinerarios.push(intinerario)

    await writeData('intinerarios', intinerarios)

    return intinerario
}

export { updateIntinerario }