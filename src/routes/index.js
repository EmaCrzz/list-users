import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import Layout from 'components/Layout'
import Login from 'components/Login/Login'
import Register from 'components/Register/Register'
import Home from 'components/Home/Home'
import IsLoginContext from 'context/IsLoginContext'
import { MemoizedDetails } from 'components/Users/Details'
import ListTasks from 'components/Tasks/ListTasks'
import ManagerColors from 'components/ManagerColors/ManagerColors'

export default function Routes () {
  const { isLogin } = useContext(IsLoginContext)
  const matches = useMediaQuery('(min-width:800px)')

  if (!isLogin) {
    return (
      <Router>
        <Layout bool='false' listUsers='https://github.com/EmaCrzz/list-users'>
          <Switch>
            <Route component={Register} exact path="/register" />
            <Route component={Login} exact path='/login' />
            <Redirect to='/login' />
          </Switch>
        </Layout>
      </Router>
    )
  }

  return (
    <Router>
      <Layout bool='true' listUsers='Lista de Usuarios'>
        <Switch>
          <Route component={Home} exact path='/home'/>
          {!matches && <Route component={MemoizedDetails} exact path='/user/details/:id' />}
          <Route component={ListTasks} exact path='/tasks/user/:id'/>
          <Route component={ManagerColors} exact path='/configuration-colors'/>
          <Redirect to='/home' />
        </Switch>
      </Layout>
    </Router>
  )
}
