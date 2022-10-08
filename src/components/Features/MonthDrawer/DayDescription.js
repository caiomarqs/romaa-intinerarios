import React from "react"

import { Box, Typography } from "@mui/material"

import { ItemTitle } from "../../Typos"

const DayDescription = ({ day, month, year, sx, ...props }) => {
    return (
        <Box sx={{
            marginLeft: '1rem',
            flex: 1,
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