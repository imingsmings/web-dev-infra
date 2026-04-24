import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import './styles/global.css'
import BroswerPage from './BroswerPage'

function AppRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path='/files'
          component={BroswerPage}
        />
        <Redirect to='/files' />
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
