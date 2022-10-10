import React from "react"

import { Box, Typography } from "@mui/material"

import { ItemTitle } from "../../Typos"
import { theme } from "../../../theme"

const DayDescription = ({ day, month, year, sx, ...props }) => {
    return (
        <Box sx={{
            marginLeft: '1rem',
            flex: 1,
            [theme.breakpoints.down('sm')]: {
                textAlign: 'end'
            },
            ...sx
        }}
            {...props}
        >
            <ItemTitle>Dia: {day}</ItemTitle>
            <Typography variant='subtitle2'>Mês: {month}</Typography>
            <Typography variant='subtitle2'>Ano: {year}</Typography>
        </Box>
    )
}

export { DayDescription }