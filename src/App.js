import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import {  withRouter } from 'react-router-dom'
import routes from './routes'

class App extends React.Component {
  render() {
    return (
     <div className='App'>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={() => <Component {...this.props} {...rest} />}
            />
          ))}
        </Switch>
     </div>
   );
  }
}

export default withRouter(App)