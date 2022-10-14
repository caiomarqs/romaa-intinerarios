import { IntinerarioRepository } from "../../repository"

const sortYears = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    return 0;
}


const readAllYearsByUserId = async userId => {
    const months = await IntinerarioRepository.readAllYearsByUserId(userId)
    return months.sort(sortYears)
}

export {
    readAllYearsByUserId
}