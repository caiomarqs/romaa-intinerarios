import { getData } from "../../repository"

const sortIntineraios = (prev, curr) => {
    if (prev.dia < curr.dia) {
        return -1;
    }
    if (prev.dia > curr.dia) {
        return 1;
    }
    return 0;
}

const readAllIntinerariosByUser = async (userId) => {
    const intinerarios = await getData('intinerarios')
    return intinerarios
        .filter(intinerario => intinerario.userId == userId)
        .sort(sortIntineraios)
}

const validateIninerario = (intinerarios, data, userId) => intinerarios.find(intinerario => (
    intinerario.mes == data.mes &&
    intinerario.ano == data.ano &&
    intinerario.dia == data.dia &&
    intinerario.userId == userId
))

export { readAllIntinerariosByUser, validateIninerario }