import { writeData } from "../../repository"
import { readAllIntinerariosByUser, validateIninerario } from "./read-intinerario"

const deleteIntinerario = async (data, userId) => {
    let intinerarios = await readAllIntinerariosByUser(userId)

    const validateData = validateIninerario(intinerarios, data, userId, userId)

    if (validateData === undefined) {
        return false
    }

    intinerarios.pop(validateData)

    await writeData('intinerarios', intinerarios)

    return true
}

export { deleteIntinerario }