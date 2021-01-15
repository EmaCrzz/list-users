import React from 'react'

import Grid from '@material-ui/core/Grid'

import Layout from './Layout'
import Details from './Users/Details'
import List from './Users/List'
console.log('Hola estoy colaborando')
export default function App () {
  return (
    <Layout>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <List />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Details />
        </Grid>
      </Grid>
    </Layout>
  )
}
