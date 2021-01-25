import React from 'react'

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import List from 'components/Users/List'
import Details from 'components/Users/Details'

export default function Home () {
  const mdDisplay = useMediaQuery('(min-width:800px)')

  if (mdDisplay) {
    return (
      <Grid container>
        <Grid item sm={6} xs={12}>
          <List />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Details />
        </Grid>
      </Grid>
    )
  }

  return (
    <List />
  )
}
