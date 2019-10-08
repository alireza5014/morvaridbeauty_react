import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import AboutUs from "./AboutUs";
import Device from "./Device";
import Price from "./Price";


class Routes extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about_us' component={AboutUs}/>
              <Route exact path='/contact' component={Price}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default Routes;
