import React, {Component} from 'react';
import {Router, HashRouter, Link} from "react-router-dom";

import Home from "./Home";
import Service from "./Service";
import Blog from "./Blog";
import Device from "./Device";
import AboutUs from "./AboutUs";
import Price from "./Price";
import { Route} from "react-router";
import BlogContent from "./BlogContent";

import Slider from "./Slider";
import ContactUs from "./ContactUs";
import history from '../history';


export default class Nav extends Component {
    render() {
        return (


                <Router history={history}>


            <nav id="counter" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
                <div className="container">
                    <div className="navbar-brand" >

                        <a href="#" className="text-success l-dark ">
                            <div className="btn-group"><i className="fa fa-phone fa-1x m-3"/><h3
                                className=" ml-3">09120197244</h3></div>
                        </a>
                        <a href="#" className="text-white l-light ">
                            <div className="btn-group"><i className="fa fa-user fa-1x m-3"/><h3
                                className=" ml-3">09120197244</h3></div>
                        </a>


                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="mdi mdi-menu"/>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">





                            <li className="nav-item active">
                                <Link className="nav-link text-black-50" to="/">خانه</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-black-50" to="/service">خدمات</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-black-50" to="/price">قیمت ها</Link>

                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">بلاگ</Link>

                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/device">تجهیزات ما</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about_us">درباره ما</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact_us">تماس ما</Link>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
                <Route exact path='/'   component={Home}/>

                <Route exact path='/price' component={Price}/>
                <Route exact path='/device'   component={() => <Device limit={-1} />}/>

                <Route exact path='/blog'
                       component={() => <Blog limit={-1} />}
                />
                <Route exact path='/service'  component={() => <Service limit={-1} />}/>

                <Route exact path='/blog-content/:category_slug/:post_slug' component={BlogContent}/>
                <Route exact path='/about_us'  component={() => <AboutUs more={false} />}/>
                <Route exact path='/contact_us' component={ContactUs}/>



            </Router>


    )
    }
}

