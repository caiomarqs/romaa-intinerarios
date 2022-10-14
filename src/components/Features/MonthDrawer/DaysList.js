import React, { useContext, useEffect } from 'react'

import { useFetch } from '../../../hooks'
import { MonthDrawerContext, MONTH_DRAWER_ACTIONS } from '../../../providers'
import { NoDataMessage } from '../../Typos'

import { DayItem } from './DayItem'

const DaysList = ({ user, months, years }) => {

    const { monthDrawerState, dispatch } = useContext(MonthDrawerContext)
    const { days } = monthDrawerState

    const { data } = useFetch(`/api/intinerarios/${user.id}?month=${months[0]}&year=${years[0]}`)

    useEffect(() => {
        if (data) {
            dispatch({
                type: MONTH_DRAWER_ACTIONS.SET_DAYS,
                payload: data
            })
        }
    }, [months, years, data, days])

    return (
        data?.length > 0
            ?
            data.map(day => (
                <DayItem key={day.dia} day={day} />
            ))
            :
            <NoDataMessage />
    )
}

export { DaysList }