import React from 'react'

import { Box, Typography } from "@mui/material"

import { black, gray } from "../../../theme"

const DayIcon = ({ day, ...props }) => {
    return (
        <Box
            sx={{
                width: '4rem',
                height: '4rem',
                bgcolor: black.A100,
                borderRadius: '0.375rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            {...props}
        >
            <Typography
                sx={{ color: gray.A300, fontWeight: 'bold' }}
                variant='h6'
            >
                {day}
            </Typography>
        </Box>
    )
}

export { DayIcon }