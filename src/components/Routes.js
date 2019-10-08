import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import Device from "./Device";
import Price from "./Price";
import Home from "./Home";
import Service from "./Service";
import Blog from "./Blog";
import {Route} from "react-router";


class Routes extends React.Component {
  render() {
    return (
        <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about_us">About</Link>
                  </li>
                  <li>
                      <Link to="/price">price</Link>
                  </li>
              </ul>

              <hr />
              <Route exact path='/'   component={Home}/>
              <Route exact path='/about_us' component={AboutUs}/>
              <Route exact path='/price' component={Price}/>
              <Route exact path='/device' component={Device}/>
              <Route exact path='/blog' component={Blog}/>
              <Route exact path='/service' component={Service}/>

          </div>


        </Router>
     );
  }
}

export default Routes;
