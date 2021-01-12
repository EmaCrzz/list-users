import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Avatar from 'components/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1)
  }
}))

export default function Details () {
  const classes = useStyles()
  return (
    <Container maxWidth='sm'>
      <div className={classes.root}>
        <Avatar />
      </div>
    </Container>
  )
}
