import React, { useState } from 'react'

import dayjs from 'dayjs'

import { Box } from '@mui/system'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { IconButton } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { OutlineBaseInput } from '../../Inputs/OutlineBaseInput'
import { FeatureTitle } from '../../Typos'

const AddDayFooter = ({totalKilometers}) => {

    const [date, setDate] = useState(dayjs())

    return (
        <Box sx={{
            justifyContent: 'end',
            padding: "3rem 0 0 0",
            display: 'flex'
        }}>
            <Box sx={{ flex: 1 }}>
                <FeatureTitle>Total Percorido: {totalKilometers}</FeatureTitle>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    onChange={(e) => {
                        setDate(dayjs(e))
                    }}
                    value={date}
                    minDate={dayjs().startOf("month")}
                    maxDate={dayjs().endOf("month")}
                    label="Dia do mês"
                    inputFormat="DD"
                    renderInput={(params) => <OutlineBaseInput sx={{ width: 'none' }} name="dia-do-mes" {...params} />}
                />
            </LocalizationProvider>
            <IconButton>
                <AddCircleOutlineOutlinedIcon />
            </IconButton>
        </Box>
    )
}

export { AddDayFooter }