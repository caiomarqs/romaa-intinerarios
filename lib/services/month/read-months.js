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

const filterDuplicates = (item, pos, self)  => {
    return self.indexOf(item) == pos;
}

const readAllMonthsByUserIdAndYear = async (userId, ano) => {
    const userMonths = await IntinerarioRepository.readAllMonthsByUserIdAndYear(userId, ano)
    const sortedMonths = userMonths.sort(sortMonths)
    const restOfMonths = [...months.slice(months.indexOf(sortedMonths[0]) + 1)]
    const filterMonths = [...sortedMonths, ...restOfMonths].filter(filterDuplicates)

    return filterMonths.sort(sortMonths)
}

export {
    readAllMonthsByUserIdAndYear
}