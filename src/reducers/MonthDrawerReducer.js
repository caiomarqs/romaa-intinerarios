import { MONTH_DRAWER_ACTIONS } from '../providers'

const MonthDrawerReducer = (state, action) => {
    switch (action.type) {
        case MONTH_DRAWER_ACTIONS.SET_DAYS:
            const { days, ...restState } = state
            return { days: action.payload, ...restState }
        case MONTH_DRAWER_ACTIONS.ADD_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.DELETE_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.EDIT_DAY:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.CHANGE_MONTH:
            return { ...state }
        case MONTH_DRAWER_ACTIONS.CHANGE_YEAR:
            return { ...state }
        default:
            return state
    }
}

export { MonthDrawerReducer }