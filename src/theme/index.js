import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
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
    }
  }
})

export default theme
