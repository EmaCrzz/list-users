import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import emptySVG from 'assets/svgs/empty.svg'

const useStyles = makeStyles(() => ({
  containerImg: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: { height: 150 }
}))

export default function DetailEmpty () {
  const classes = useStyles()

  return (
    <Container className={classes.containerImg} maxWidth="sm">
      <img alt="empty" className={classes.img} src={emptySVG} />
      <Typography align="center" color="textSecondary">
        Selecciona un usuario
      </Typography>
    </Container>
  )
}
