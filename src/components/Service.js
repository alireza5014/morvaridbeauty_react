import React, {Component} from 'react';
import {Link} from "react-router-dom";

const meta = {
    title: 'about',
    keywords: 'about',
    description: 'about',
}
export default class Service extends Component {
    render() {
        return (
            <section className="section bg-light" id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h4 className="title text-uppercase mb-4">خدمات کلینیک</h4>
                                <p className="text-muted mx-auto para-desc mb-0">رنگ رویایی خود را چاپ کنید خانه خود را
                                    به رنگهای پر جنب و جوش ببرید. ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت
                                    قرار می دهیم برا نیاز های شما</p>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-shield text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">01</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark">لیزر موهای زاید</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-way text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">02</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark"> هاشور ابرو و آرایش دایم صورت</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-note2 text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">03</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark">پاکسازی پوست</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>


                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-world text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">04</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark"> کربوکسی تراپی</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-anchor text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">05</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark"> تزریق ژل و بوتاکس</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
                                        className="mdi mdi-chevron-right ml-1"/></Link>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="service-container border-color border rounded p-4 text-center">
                                <div className="number-icon position-relative">
                                    <div className="icon-2 d-inline-block border rounded-pill">
                                        <i className="pe-7s-plane text-custom"/>
                                    </div>

                                    <div className="number text-center rounded-pill bg-white border">
                                        <span className="font-weight-bold">06</span>
                                    </div>
                                </div>

                                <div className="content mt-3">
                                    <h4 className="title text-dark"> میکرونیدلینگ</h4>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
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
