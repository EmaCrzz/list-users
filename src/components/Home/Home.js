import React from 'react'

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import List from 'components/Users/List'
import { MemoizedDetails } from 'components/Users/Details'

export default function Home (props) {
  const matches = useMediaQuery('(min-width:800px)')

  if (matches) {
    return (
      <Grid container>
        <Grid item sm={6} xs={12}>
          <List matches={matches} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <MemoizedDetails />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container>
        <Grid item xs={12}>
          <List matches={matches}/>
        </Grid>
      </Grid>
    )
  }
}
