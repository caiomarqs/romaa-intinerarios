import { writeData } from "../../repository"
import { readAllIntinerariosByUser } from "./read-intinerario"

const createIntinerario = async (data, userId) => {
    let intinerarios = await readAllIntinerariosByUser(userId)

    const validateData = intinerarios.find(intinerario => (
        intinerario.mes == data.mes,
        intinerario.ano == data.ano,
        intinerario.dia == data.dia
    ))

    if(validateData) {
       return false 
    }

    const intinerario = {
        ...data,
        userId
    }

    intinerarios.push(intinerario)

    await writeData('intinerarios', intinerarios)

    return intinerario;
}

export { createIntinerario }