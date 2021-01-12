import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiAvatar from '@material-ui/core/Avatar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 'auto',
    height: 'auto',
    '& .MuiSvgIcon-root': {
      fontSize: '5rem'
    }
  },
  loading: { margin: '8px auto' }
}))

export default function Avatar () {
  const classes = useStyles()
  return (
    <MuiAvatar alt="Cliente" className={classes.avatar}>
      <AccountCircleIcon />
    </MuiAvatar>
  )
}
