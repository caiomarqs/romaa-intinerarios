import React, { useContext, useEffect, useState } from 'react'

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
import { theme } from '../../../theme'
import { MonthDrawerContext } from '../../../providers'


const AddDayFooter = () => {

    const { monthDrawerState } = useContext(MonthDrawerContext)
    const { days, month, year } = monthDrawerState

    const [date, setDate] = useState(dayjs())

    const { data } = useSession()
    const { user } = data;

    const [totalKilometers, setTotalKilometers] = useState(0)
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)


    useEffect(() => {

        if(month && year) {
            const reciveDate = dayjs(`${year}-${month}`, 'YYYY-MMMM')
            const thisDay = dayjs().get('month') == reciveDate.get('month') ? dayjs().get('date') : '01'
            setDate(dayjs(`${year}-${month}-${thisDay}`, 'YYYY-MMMM-DD'))
        }

        if (days?.length > 0) {
            setTotalKilometers(days.reduce((prev, curr) => prev + curr.km, 0))
        }
    }, [days, month, year])

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

        await mutate(`/api/intinerarios/${user.id}?month=${month}&year=${year}`)
    }

    return (
        <>
            <Box sx={{
                justifyContent: 'end',
                padding: "3rem 0 0 0",
                display: 'flex',
                [theme.breakpoints.down('sm')]: {
                    justifyContent: 'start',
                    flexWrap: 'wrap'
                }
            }}>
                <Box sx={{ flex: 1 }}>
                    <FeatureTitle>Total Percorido: {totalKilometers}</FeatureTitle>
                </Box>
                <Box
                    sx={{
                        [theme.breakpoints.down('sm')]: {
                            marginTop: '1.5rem'
                        }
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            onChange={(e) => {
                                setDate(dayjs(e))
                            }}
                            value={date}
                            minDate={date.startOf("month")}
                            maxDate={date.endOf("month")}
                            label="Dia do mês"
                            inputFormat="DD"
                            renderInput={(params) => <OutlineBaseInput sx={{ width: 'none' }} name="dia-do-mes" {...params} />}
                        />
                    </LocalizationProvider>
                    <IconButton onClick={addDay} >
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                </Box>

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