import React, {Component} from 'react';
import Meta from "./Meta";
import {Link} from "react-router-dom";

const meta={
    title:'Device',
    keywords:'Device',
    description:'Device',
}
export default class Device extends Component {
    render() {
        return (
            <section className="section" id="team">
                <Meta meta={meta} />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h4 className="title text-uppercase mb-4"> برخی از تجهیزات کلینیک مروراید</h4>
                                <p className="text-muted mx-auto para-desc mb-0">رنگ رویایی خود را چاپ کنید خانه خود را
                                    به رنگهای پر جنب و جوش ببرید. ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت
                                    قرار می دهیم برای نیاز های شما</p>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="team-concept rounded text-center bg-white shadow">
                                <div className="team-image position-relative">
                                    <img  src={require('../images/devices/001.jpg')}   className="img-fluid rounded-top" alt="555" />

                                </div>
                                <div className="content pt-4 pb-4">
                                    <h4 className="name text-uppercase mb-0"> دستگاه لیز موهای زاید دایود</h4>

                                    <Link className="text-primary" to="/blog-content/1/3">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="team-concept rounded text-center bg-white shadow">
                                <div className="team-image position-relative">
                                    <img src={require('../images/devices/002.jpg')} className="img-fluid rounded-top" alt="" />

                                </div>
                                <div className="content pt-4 pb-4">
                                    <h4 className="name text-uppercase mb-0"> دستگاه لیز موهای زاید E-light shr</h4>

                                    <Link className="text-primary" to="/blog-content/1/3">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="team-concept rounded text-center bg-white shadow">
                                <div className="team-image position-relative">
                                    <img src={require('../images/devices/003.jpg')} className="img-fluid rounded-top" alt="" />

                                </div>
                                <div className="content pt-4 pb-4">
                                    <h4 className="name text-uppercase mb-0">دستگاه میکرودرم ابریژن </h4>

                                    <Link className="text-primary" to="/blog-content/1/3">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="team-concept rounded text-center bg-white shadow">
                                <div className="team-image position-relative">
                                    <img src={require('../images/devices/004.jpg')} className="img-fluid rounded-top" alt="" />

                                </div>
                                <div className="content pt-4 pb-4">
                                    <h4 className="name text-uppercase mb-0"> دستگاه کربوکسی تراپی </h4>

                                    <Link className="text-primary" to="/blog-content/1/3">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


    )
    }
}
