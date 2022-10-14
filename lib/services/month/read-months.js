import { IntinerarioRepository } from "../../repository"

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Setember",
    "October",
    "November",
    "December",
]

const sortMonths = (a, b) => {
    if (months.indexOf(a) < months.indexOf(b)) {
        return -1;
    }
    if (months.indexOf(a) > months.indexOf(b)) {
        return 1;
    }

    return 0;
}


const readAllMonthsByUserId = async userId => {
    const months = await IntinerarioRepository.readAllMonthsByUserId(userId)
    return months.sort(sortMonths)
}

export {
    readAllMonthsByUserId
}