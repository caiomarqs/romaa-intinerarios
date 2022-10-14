import { IntinerarioRepository } from "../../repository"

const updateIntinerario = async (data, userId) => {
    const intinerario = await IntinerarioRepository.readIntinerario(data, userId)

    if(!intinerario) {
        return 
    }

    return await IntinerarioRepository.updateIntinerario(data, userId)
}

export { updateIntinerario }