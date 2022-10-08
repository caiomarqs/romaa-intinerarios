import React from 'react'

import { Box} from '@mui/system'

import { MonthDrawerHeader } from './MonthDrawerHeader'
import { DayItem } from './DayItem'
import { AddDayFooter } from './AddDayFooter'

const days = [
    {
        day: 8,
        month: "Outubro",
        year: 2022
    },
    {
        day: 10,
        month: "Outubro",
        year: 2022
    }
]


const MonthDrawer = () => {
    return (
        <Box>
            <MonthDrawerHeader />
            {
                days.map(day => <DayItem key={day.day} {...day} />)
            }
            <AddDayFooter />
        </Box>
    )
}

export { MonthDrawer }