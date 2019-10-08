import React, {Component} from 'react';
import Meta from "./Meta";
const meta={
    title:'Price',
    keywords:'Price',
    description:'Price',
}
export default class Price extends Component {
    render() {
        return (

            <section className="section" id="price">
                <Meta meta={meta} />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h4 className="title text-uppercase mb-4">نرخ های ما</h4>
                                <p className="text-muted mx-auto para-desc mb-0">رنگ رویایی خود را چاپ کنید خانه خود را
                                    به رنگهای پر جنب و جوش ببرید. ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت
                                    قرار می دهیم برای نیاز های شما</p>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="pricing-table border text-center rounded bg-white">
                                <h3 className="price-title p-4 bg-light mb-0">پکیج کاربردی</h3>
                                <div className="pricing-features">
                                    <ul className="list-unstyled p-4 mb-0">
                                        <li className="border-0"> دست کامل</li>
                                        <li className="border-0"> پا کامل</li>
                                        <li className="border-0"> زیر بغل و بکینی</li>
                                        <li className="border-0"> صورت کامل</li>
                                        <li className="border-0"> خط شکم</li>


                                    </ul>
                                </div>
                                <div className="price-value p-4 position-relative bg-light">
                                    <div className="price-lable">
                                        <h4 className="mb-0 rates">315,000 تومان</h4>
                                    </div>
                                </div>
                                <div className="price-button p-4">
                                    <a href="#" className="btn btn-custom w-100">اکنون وارد شوید</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="pricing-table border text-center rounded bg-white">
                                <h3 className="price-title p-4 text-light bg-custom mb-0">پکیج طلایی</h3>
                                <div className="pricing-features">
                                    <ul className="list-unstyled p-4 mb-0">
                                        <li className="border-0"> فول بادی کامل (کل بدن)</li>
                                        <li className="border-0"> صورت کامل</li>


                                    </ul>
                                </div>
                                <div className="price-value p-4 position-relative bg-light">
                                    <div className="price-lable">
                                        <h4 className="mb-0 rates">415,000 تومان</h4>

                                    </div>
                                </div>
                                <div className="price-button p-4">
                                    <a href="#" className="btn btn-custom w-100">اکنون وارد شوید</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="pricing-table shadow text-center rounded bg-white">
                                <div className="lable text-center bg-custom pt-2 pb-2">
                                    <h6 className="best text-white mb-0 text-uppercase"> *</h6>
                                </div>
                                <h3 className="price-title p-4 bg-light mb-0">پکیج نقره ای</h3>
                                <div className="pricing-features">
                                    <ul className="list-unstyled p-4 mb-0">
                                        <li className="border-0"> دست کامل</li>
                                        <li className="border-0"> پا کامل</li>
                                        <li className="border-0"> زیر بغل و بکینی</li>
                                        <li className="border-0"> صورت کامل</li>
                                        <li className="border-0"> خط شکم</li>


                                    </ul>
                                </div>
                                <div className="price-value p-4 position-relative bg-light">
                                    <div className="price-lable">
                                        <h4 className="mb-0 rates">315,000 تومان</h4>
                                    </div>
                                </div>
                                <div className="price-button p-4">
                                    <a href="#" className="btn btn-custom w-100">اکنون وارد شوید</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="pricing-table border text-center rounded bg-white">
                                <h3 className="price-title p-4 bg-light mb-0">پکیج برنزی</h3>
                                <div className="pricing-features">
                                    <ul className="list-unstyled p-4 mb-0">
                                        <li className="border-0"> دست کامل</li>
                                        <li className="border-0"> پا کامل</li>
                                        <li className="border-0"> زیر بغل و بکینی</li>
                                        <li className="border-0"> صورت کامل</li>
                                        <li className="border-0"> خط شکم</li>


                                    </ul>
                                </div>
                                <div className="price-value p-4 position-relative bg-light">
                                    <div className="price-lable">
                                        <h4 className="mb-0 rates">315,000 تومان</h4>
                                    </div>
                                </div>
                                <div className="price-button p-4">
                                    <a href="#" className="btn btn-custom w-100">اکنون وارد شوید</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>



    )
    }
}
