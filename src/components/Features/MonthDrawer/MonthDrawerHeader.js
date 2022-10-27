import React, { useContext, useEffect, useState } from 'react'

import { Box } from '@mui/system'

import { FeatureTitle } from '../../Typos'
import { BigInputSelected } from '../../Inputs'
import { CustomDivider } from '../../Customs'
import { MonthDrawerContext, MONTH_DRAWER_ACTIONS } from '../../../providers'

const MonthDrawerHeader = () => {

    const { monthDrawerState, dispatch } = useContext(MonthDrawerContext)
    const { months, years, month, year } = monthDrawerState

    const changeMonth = (value) => {
        dispatch({
            type: MONTH_DRAWER_ACTIONS.CHANGE_MONTH,
            payload: value
        })
    }

    const changeYear = (value) => {
        dispatch({
            type: MONTH_DRAWER_ACTIONS.CHANGE_YEAR,
            payload: value
        })
    }

    useEffect(() => {
        changeMonth(months?.length > 0 ? months[0] : '')
        changeYear(years?.length > 0 ? years[0] : 0)
    }, [months, years])

    return (
        (
            (months?.length > 0 && years?.length > 0)
            &&
            <>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <FeatureTitle sx={{ flex: 1 }}>
                        Intirarios
                    </FeatureTitle>
                    <Box>
                        <BigInputSelected
                            labelName="mes"
                            initalValue={month ?? ''}
                            onChange={val => changeMonth(val)}
                            values={months}
                            showLabel={false}
                            sx={{
                                marginRight: '.5rem'
                            }}
                        />
                        <BigInputSelected
                            labelName="Ano"
                            initalValue={year ?? ''}
                            onChange={val => changeYear(val)}
                            values={years}
                            showLabel={false}
                        />
                    </Box>
                </Box>
                <CustomDivider margin={true} />
            </>
        )
    )
}

export { MonthDrawerHeader }