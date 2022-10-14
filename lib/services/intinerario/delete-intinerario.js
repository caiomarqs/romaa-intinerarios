import { IntinerarioRepository } from "../../repository"

const deleteIntinerario = async (data, userId) => {
    const intinerario = await IntinerarioRepository.readIntinerario(data, userId)

    if(!intinerario) {
        return 
    }

    return await IntinerarioRepository.delteIntinerario(data, userId)
}

export { deleteIntinerario }