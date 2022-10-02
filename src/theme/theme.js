import { createTheme } from '@mui/material/styles';
import { gray } from './colors';
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
          minWidth: '128px',
          fontWeight: 'bold'
        }
      },
      defaultProps:{
        size: 'small'
      }
    },
    MuiAppBar: {
      styleOverrides:{
        root:{
          backgroundColor: '#fff',
          boxShadow: 'none',
          height: '3.75rem',
          padding: '0 1.5rem',
          borderBottom: `0.0625rem solid ${gray.A500}`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          color: gray.A200,
        },
        colorPrimary: gray.A200,
      }
    }
  },
  shadows: shadows
})

export { theme }
