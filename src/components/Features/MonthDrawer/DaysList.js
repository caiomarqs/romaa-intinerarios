import React, { useContext } from 'react'

import { MonthDrawerContex } from '../../../providers'
import { NoDataMessage } from '../../Typos'

import { DayItem } from './DayItem'

const DaysList = () => {

    const { monthDrawerState } = useContext(MonthDrawerContex)
    const { days } = monthDrawerState

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