import React from 'react'

import { Box } from '@mui/system'

import { CustomDivider } from '../../Customs'

import { DayIcon } from './DayIcon'

import { ItemKilometers } from './ItemKilometers';
import { DayDescription } from './DayDescription'

const DayItem = ({day, month, year, kilometers}) => {
    return (
        <Box
            sx={{
                padding: "0 1rem"
            }}
        >
            <Box
                sx={{
                    padding: "1rem",
                    display: 'flex'
                }}
            >
                <DayIcon day={day} />
                <DayDescription day={day} month={month} year={year} />
                <ItemKilometers defaultKilometer={kilometers}/>
            </Box>
            <CustomDivider />
        </Box>
    )
}

export { DayItem }