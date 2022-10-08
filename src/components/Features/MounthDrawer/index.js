import React from 'react'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import { CustomDivider } from '../../Customs'
import { ItemTitle } from '../../Typos'

import { MounthDrawerHeader } from './MounthDrawerHeader'
import { DayIcon } from './DayIcon'

import { ItemKilometers } from './ItemKilometers';

const MounthDrawer = () => {
    return (
        <Box>
            <MounthDrawerHeader />
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
                    <DayIcon day={8} />
                    <Box sx={{ marginLeft: '1rem', flex: 1 }}>
                        <ItemTitle>Dia: 8</ItemTitle>
                        <Typography variant='subtitle2'>Mês: Outubro</Typography>
                        <Typography variant='subtitle2'>Ano: 2022</Typography>
                    </Box>
                    <ItemKilometers />
                </Box>
                <CustomDivider />
            </Box>

        </Box>
    )
}

export { MounthDrawer }