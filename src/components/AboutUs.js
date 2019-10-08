import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
                <div className="container">
                    <a className="navbar-brand" >

                        <a href="" className="text-success l-dark ">
                            <div className="btn-group"><i className="fa fa-phone fa-1x m-3"/><h2
                                className=" ml-3">02146813751</h2></div>
                        </a>
                        <a href="" className="text-danger l-light ">
                            <div className="btn-group"><i className="fa fa-user fa-1x m-3"/><h2
                                className=" ml-3">09126145705</h2></div>
                        </a>


                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="mdi mdi-menu"/>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link"  >صفحه اصلی</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" >خدمات</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  >تیم</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  >قیمت</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  >اخبار</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link"  >تماس</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>


    )
    }
}
