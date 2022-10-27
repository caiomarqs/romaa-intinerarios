import React, { useContext, useEffect } from 'react'

import { fetcher, useFetch } from '../../../hooks'
import { MonthDrawerContext, MONTH_DRAWER_ACTIONS } from '../../../providers'
import { NoDataMessage } from '../../Typos'

import { DayItem } from './DayItem'

const DaysList = ({ user }) => {

    const { monthDrawerState, dispatch } = useContext(MonthDrawerContext)
    const { days, month, year } = monthDrawerState

    const { data } = useFetch(`/api/intinerarios/${user.id}?month=${month}&year=${year}`, data => {
        dispatch({
            type: MONTH_DRAWER_ACTIONS.SET_DAYS,
            payload: data
        })
    })

    useEffect(() => { }, [month, year])

    return (
        days?.length > 0
            ?
            days.map(day => (
                <DayItem key={day.dia} day={day} />
            ))
            :
            <NoDataMessage />
    )
}

export { DaysList }