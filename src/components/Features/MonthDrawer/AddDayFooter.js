import React, { useState } from 'react'

import dayjs from 'dayjs'
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { Box } from '@mui/system'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { IconButton } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { OutlineBaseInput } from '../../Inputs/OutlineBaseInput'
import { FeatureTitle } from '../../Typos'

import { api } from '../../../utils'
import { CustomSnakcBar } from '../../SnackBar'


const AddDayFooter = ({ totalKilometers }) => {

    const [date, setDate] = useState(dayjs())

    const { data } = useSession()
    const { user } = data;

    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const addDay = async () => {
        const addData = await api(`/api/intinerarios/${user.id}`, {
            dia: date.date(),
            mes: dayjs.localeData().months()[date.month()],
            ano: date.year(),
            km: 0
        }, 'POST')


        if (addData.status != 200) {
            setError('Esse dia já foi adicionado!')
            setShowError(true)
        }

        await mutate(`/api/intinerarios/${user.id}`)
    }

    return (
        <>
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
                <IconButton onClick={addDay} >
                    <AddCircleOutlineOutlinedIcon />
                </IconButton>
            </Box>
            <CustomSnakcBar
                message={error}
                type="error"
                open={showError}
                duration={1200}
                close={() => setShowError(false)}
            />
        </>
    )
}

export { AddDayFooter }