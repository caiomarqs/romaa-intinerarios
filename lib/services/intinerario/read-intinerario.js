import { IntinerarioRepository } from "../../repository"

const readAllIntinerariosByUser = async userId => (
    await IntinerarioRepository.readAllIntinerariosByUser(userId)
)

export { readAllIntinerariosByUser }