import dayjs from "dayjs";
import { IntinerarioRepository } from "../../repository"

const sortYears = (a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }

    return 0;
}


const readAllYearsByUserId = async userId => {
    const months = await IntinerarioRepository.readAllYearsByUserId(userId)
    let sortedYears = months.sort(sortYears)

    if(!sortedYears.includes(dayjs().get("year"))) {
        sortedYears = [dayjs().get("year"), ...sortYears]
    }
    
    return months.sort(sortYears)
}

export {
    readAllYearsByUserId
}