import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

import ErrSVG from 'assets/svgs/warning.svg'

const useStyles = makeStyles(() => ({
  root: {
    height: 'calc(100vh - 68px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: { height: 150 }
}))

export default function ErrorList () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.img} src={ErrSVG} alt="empty" />
      <Typography align="center" color="error">
        Oops! Ocurrio un error :(
      </Typography>
    </div>
  )
}
