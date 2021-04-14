import { makeStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import MuiBrightness2Icon from '@material-ui/icons/Brightness2'
import MuiWbSunnyIcon from '@material-ui/icons/WbSunny'
import MuiMenu from '@material-ui/core/Menu'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'

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

export const Menu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})((props) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <MuiMenu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    elevation={0}
    getContentAnchorEl={null}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
))

export const MenuItem = withStyles((theme) => ({
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: '36px'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MuiMenuItem)

export const FormControlLabel = withStyles((theme) => ({
  root: {
    '& .MuiTypography-root, &.MuiFormControlLabel-label, &.MuiTypography-body1': {
      marginTop: 'auto'
    }
  }
}))(MuiFormControlLabel)
