import { makeStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import MuiBrightness2Icon from '@material-ui/icons/Brightness2'
import MuiWbSunnyIcon from '@material-ui/icons/WbSunny'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  dark: {
    background: 'black'
  }
}))

export const WbSunnyIcon = withStyles(() => ({
  root: {
    color: 'rgb(255, 255, 120)'
  }
}))(MuiWbSunnyIcon)

export const Brightness2Icon = withStyles(() => ({
  root: {
    color: '#fafafa'
  }
}))(MuiBrightness2Icon)
