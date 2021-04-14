import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import teal from '@material-ui/core/colors/teal'

export const returnTheme = (darkMode, colorLight) => {
  const paletteType = darkMode ? 'dark' : 'light'
  const primaryColor = darkMode ? grey[500] : colorLight.primary
  const secondaryColor = darkMode ? teal[300] : colorLight.secondary

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: '0.4em'
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#999999'
          },
          'button:focus': {
            outline: 'none'
          }
        }
      },
      MuiIconButton: {
        label: {
          /* color: 'white' con esta propiedad en este lugar, se dejan de ver los checkox */
        }
      }

    }
  })
  return theme
}
