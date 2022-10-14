import { MONTH_DRAWER_ACTIONS } from '../providers'

const MonthDrawerReducer = (state, action) => {
    switch (action.type) {
        case MONTH_DRAWER_ACTIONS.SET_DRAWER_HEADER:
            return {
                ...state,
                ...action.payload
            }
        case MONTH_DRAWER_ACTIONS.SET_DAYS:
            return {
                ...state,
                days: action.payload,
            }
        case MONTH_DRAWER_ACTIONS.ADD_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.DELETE_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.EDIT_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.CHANGE_MONTH:
            return { ...state, month: action.payload }
        case MONTH_DRAWER_ACTIONS.CHANGE_YEAR:
            return { ...state, year: action.payload }
        default:
            return state
    }
}

export { MonthDrawerReducer }