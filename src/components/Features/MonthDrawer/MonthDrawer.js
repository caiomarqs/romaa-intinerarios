import React, { useCallback, useContext, useEffect, useState } from 'react'

import { Box } from '@mui/system'

import { MonthDrawerContex, MONTH_DRAWER_ACTIONS } from '../../../providers'
import { NoDataMessage } from '../../Typos'
import { useFetch } from '../../../hooks'


import { MonthDrawerHeader } from './MonthDrawerHeader'
import { DayItem } from './DayItem'
import { AddDayFooter } from './AddDayFooter'

const MonthDrawer = ({ user }) => {
    const { monthDrawerState, dispatch } = useContext(MonthDrawerContex)
    const { days } = monthDrawerState

    const [totalKilometers, setTotalKilometers] = useState(0)

    const { data, error } = useCallback(useFetch(`/api/intinerarios/${user.id}`))

    useEffect(() => {
        dispatch({
            type: MONTH_DRAWER_ACTIONS.SET_DAYS,
            payload: data
        })

        if (data?.length > 0) {
            setTotalKilometers(data.reduce((prev, curr) => prev + curr.km, 0))
        }
    }, [data])

    return (
        <Box>
            <MonthDrawerHeader />
            {
                days?.length > 0
                    ? days.map(day => (
                        <DayItem
                            key={day.dia}
                            month={day.mes}
                            year={day.ano}
                            day={day.dia}
                            kilometers={day.km}
                        />
                    ))
                    : <NoDataMessage />
            }
            <AddDayFooter
                totalKilometers={totalKilometers}
            />
        </Box>
    )
}

export { MonthDrawer }