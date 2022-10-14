import { IntinerarioRepository } from "../../repository"

const readAllIntinerariosByUser = async userId => (
    await IntinerarioRepository.readAllIntinerariosByUser(userId)
)

const readAllIntinerariosByUserAndDate = async (userId, month, year) => (
    await IntinerarioRepository.readAllIntinerariosByUserAndDate(userId, month, year)
)

const readAllMonthsByUserId = async userId => (
    await IntinerarioRepository.readAllMonthsByUserId(userId)
)

export { 
    readAllIntinerariosByUser, 
    readAllIntinerariosByUserAndDate,
    readAllMonthsByUserId
} 