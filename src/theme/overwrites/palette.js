import { colors, white, gray } from '../colors'

const palette = {
    type: 'light',
    primary: {
        main: colors.main,
    },
    secondary: {
        main: gray.A200,
    },
    background: {
        default: white.A000,
    },
    error: {
        main: colors.error,
    },
    warning: {
        main: colors.warning,
    },
    success: {
        main: colors.warning,
    },
    divider: 'rgba(169,179,189,0.47)',
    text: {
        secondary: gray.A200,
        disabled: gray.A400,
        hint: gray.A400,
        primary: gray.A200,
    }
}

export { palette }