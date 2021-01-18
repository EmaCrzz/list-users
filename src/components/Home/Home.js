import React from 'react'

import Grid from '@material-ui/core/Grid'
import List from 'components/Users/List'

import Details from 'components/Users/Details'

export default function Home () {
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
