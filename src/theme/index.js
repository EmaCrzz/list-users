import { createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import grey from '@material-ui/core/colors/grey'
import purple from '@material-ui/core/colors/purple'
import teal from '@material-ui/core/colors/teal'

export const returnTheme = (darkMode) => {
  const paletteType = darkMode ? 'dark' : 'light'
  const primaryColor = darkMode ? grey[500] : deepPurple[500]
  const secondaryColor = darkMode ? teal[300] : purple[500]

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
          color: 'white'
        }
      }

    }
  })
  return theme
}
