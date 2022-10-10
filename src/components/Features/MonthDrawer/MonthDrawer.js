import React, { useContext, useEffect, useState } from 'react'

import { Box } from '@mui/system'

import { MonthDrawerContex, MONTH_DRAWER_ACTIONS } from '../../../providers'
import { useFetch } from '../../../hooks'

import { MonthDrawerHeader } from './MonthDrawerHeader'
import { AddDayFooter } from './AddDayFooter'
import { DaysList } from './DaysList'

const MonthDrawer = ({ user }) => {
    const { dispatch } = useContext(MonthDrawerContex)

    const [totalKilometers, setTotalKilometers] = useState(0)

    const { data, error } = useFetch(`/api/intinerarios/${user.id}`)

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
            <DaysList />
            <AddDayFooter totalKilometers={totalKilometers} />
        </Box>
    )
}

export { MonthDrawer }