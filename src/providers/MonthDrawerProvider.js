import React, { createContext, useReducer } from 'react'
import { MonthDrawerReducer } from '../reducers'

const MonthDrawerContext = createContext()

const MONTH_DRAWER_ACTIONS = {
    SET_DRAWER_HEADER: 'SET_DRAWER_HEADER',
    SET_DAYS: 'SET_DAYS',
    ADD_DAY: 'ADD_DAY',
    DELETE_DAY: 'DELETE_DAY',
    EDIT_DAY: 'EDIT_DAY',
    CHANGE_MONTH: 'CHANGE_MONTH',
    CHANGE_YEAR: 'CHANGE_YEAR'
}

const initialState = {
    days: [],
    months: [],
    years: [],
    month: 0,
    year: 0
}

const MonthDrawerProvider = (props) => {

    const [monthDrawerState, dispatch] = useReducer(MonthDrawerReducer, initialState)

    return (
        <MonthDrawerContext.Provider value={{ monthDrawerState, dispatch }}>
            {props.children}
        </MonthDrawerContext.Provider>
    )
}


export {
    MonthDrawerContext,
    MONTH_DRAWER_ACTIONS,
    MonthDrawerProvider
}