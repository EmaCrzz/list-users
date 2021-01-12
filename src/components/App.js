import React from 'react'

import Grid from '@material-ui/core/Grid'

import Layout from './Layout'
import Details from './Users/Details'
import List from './Users/List'

export default function App () {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <List />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Details />
        </Grid>
      </Grid>
    </Layout>
  )
}
