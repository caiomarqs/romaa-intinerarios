import { createTheme } from '@mui/material/styles';
import { borderRadius } from '@mui/system';
import { fontsSize } from './fonts';

import {
  MuiOutlinedInput,
  palette,
  shadows
} from './overwrites';

const theme = createTheme({
  palette: palette,
  components: {
    MuiOutlinedInput: MuiOutlinedInput,
    MuiInputLabel: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          fontSize: fontsSize.inputFonts
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        contained:{
          fontSize: fontsSize.inputFonts,
          textTransform: 'capitalize',
          borderRadius: '.5rem',
          minWidth: '128px'
        }
      },
      defaultProps:{
        size: 'small'
      }
    }
  },
  shadows: shadows
})

export { theme }
