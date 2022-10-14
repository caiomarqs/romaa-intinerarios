import { IntinerarioRepository } from "../../repository"

const createIntinerario = async (data, userId) => {
    const intinerario = await IntinerarioRepository.readIntinerario(data, userId)

    if(intinerario) {
        return 
    }

    return await IntinerarioRepository.createIntinerario(data, userId)
}

export { createIntinerario }