import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Layout from 'components/Layout'

import IsLoginContext from 'context/IsLoginContext'
import Login from 'components/Login/Login'
import Register from 'components/Register/Register'
import Home from 'components/Home/Home'

export default function Routes () {
  const { isLogin } = useContext(IsLoginContext)

  if (!isLogin) {
    return (
      <Router>
        <Layout bool='false' info='Login' listUsers='https://github.com/EmaCrzz/list-users'>
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
      <Layout bool='true' info='Perfil' listUsers='Lista de Usuarios'>
        <Switch>
          <Route component={Home} exact path='/'/>
          <Redirect to='/' />
        </Switch>
      </Layout>
    </Router>
  )
}
