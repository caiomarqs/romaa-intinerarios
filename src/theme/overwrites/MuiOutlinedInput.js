import { gray, white } from '../colors'
import { fontsSize } from '../fonts'

const MuiOutlinedInput = {
    styleOverrides: {
        root: {
            "& .MuiOutlinedInput-notchedOutline": {
                border: 'none',
                borderRadius: '10px'
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                border: 'none',
                borderRadius: '10px'
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 'none',
                borderRadius: '10px'
            },
            color: gray.A200,
            backgroundColor: white.A600,
            borderRadius: '0.625rem',
            fontSize: fontsSize.inputFonts
        }
    },
    defaultProps: {
        size: 'small'
    }
}

export { MuiOutlinedInput }