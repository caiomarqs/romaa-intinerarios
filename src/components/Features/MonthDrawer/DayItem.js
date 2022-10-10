import React, { useState } from 'react'

import { Box } from '@mui/system'

import { CustomDivider } from '../../Customs'

import { DayIcon } from './DayIcon'

import { ItemKilometers } from './ItemKilometers';
import { DayDescription } from './DayDescription'
import { theme } from '../../../theme';

const DayItem = ({ day }) => {
    return (
        <Box
            sx={{
                padding: "0 1rem"
            }}
        >
            <Box
                sx={{
                    padding: "1rem",
                    display: 'flex',
                    [theme.breakpoints.down('sm')]: {
                        padding: "1rem 0",
                        flexWrap: 'wrap'
                    }
                }}
            >
                <DayIcon day={day.dia} />
                <DayDescription
                    day={day.dia}
                    month={day.mes}
                    year={day.ano}
                />
                <ItemKilometers day={day}/>
            </Box> 
            <CustomDivider />
        </Box>
    )
}

export { DayItem }