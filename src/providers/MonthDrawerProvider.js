import React, { createContext, useReducer } from 'react'
import { MonthDrawerReducer } from '../reducers'

const MonthDrawerContex = createContext()

const MONTH_DRAWER_ACTIONS = {
    SET_DAYS: 'SET_DAYS',
    ADD_DAY: 'ADD_DAY',
    DELETE_DAY: 'DELETE_DAY',
    EDIT_DAY: 'EDIT_DAY',
    CHANGE_MONTH: 'CHANGE_MONTH',
    CHANGE_YEAR: 'CHANGE_YEAR'
}

const initialState = {
    days: [],
    month: 0,
    year: 0
}

const MonthDrawerProvider = (props) => {

    const [monthDrawerState, dispatch] = useReducer(MonthDrawerReducer, initialState)

    return (
        <MonthDrawerContex.Provider value={{ monthDrawerState, dispatch }}>
            {props.children}
        </MonthDrawerContex.Provider>
    )
}


export {
    MonthDrawerContex,
    MONTH_DRAWER_ACTIONS,
    MonthDrawerProvider
}