import React, { useContext, useEffect, useState } from 'react'

import { Box } from '@mui/system'

import { MonthDrawerContext, MONTH_DRAWER_ACTIONS } from '../../../providers'
import { useFetch, fetcher } from '../../../hooks'

import { MonthDrawerHeader } from './MonthDrawerHeader'
import { AddDayFooter } from './AddDayFooter'
import { DaysList } from './DaysList'

const MonthDrawer = ({ user }) => {
    const { dispatch } = useContext(MonthDrawerContext)

    const [months, setMonths] = useState(null)

    const { data: years } = useFetch(`/api/years/${user.id}`, data => {
        fetcher(`/api/months/${user.id}?year=${data[0]}`)
            .then(months => setMonths(months))
    })


    useEffect(() => {
        dispatch({
            type: MONTH_DRAWER_ACTIONS.SET_DRAWER_HEADER,
            payload: {
                months,
                years
            }
        })
    }, [months, years])

    return (
        <Box>
            <MonthDrawerHeader />
            {
                (months && years)
                &&
                <>
                    <DaysList
                        user={user}
                        months={months}
                        years={years}
                    />
                    <AddDayFooter />
                </>
            }
        </Box>
    )
}

export { MonthDrawer }