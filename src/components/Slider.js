import React, {Component} from 'react';
import image_01 from '../../src/images/business/01.jpg'
import image_02 from '../../src/images/business/02.jpg'
import image_03 from '../../src/images/business/03.jpg'

export default class Slider extends Component {
    render() {
        return (
             <section className="home-slider position-relative" id="home">


                 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active"  style ={ { backgroundImage: "url("+image_01+")" } }>
                            <div className="bg-overlay"/>
                            <div className="home-center">
                                <div className="home-desc-center">
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                                <div className="title-heading text-center mt-5 pt-4">
                                                    <h1 className="heading text-white text-capitalize mb-3 animated fadeInUpBig animation-delay-1">بزرگترین
                                                        و مجهز ترین کلینیک لیزر موهای زائد در شهر قدس</h1>
                                                    <p className="para-desc text-white  mx-auto animated fadeInUpBig animation-delay-7"> همین
                                                        الان شماره تو وارد کن تا با شما تماس بگیریم</p>
                                                    <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-12">

                                                        <a  onClick={'/'}  data-toggle="modal" data-target="#login_modal"
                                                           className="btn btn-custom mr-2 mb-2"> دریافت نوبت</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" style ={ { backgroundImage: "url("+image_02+")" } }>
                            <div className="bg-overlay"/>
                            <div className="home-center">
                                <div className="home-desc-center">
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                                <div className="title-heading text-center mt-5 pt-4">
                                                    <h1 className="heading text-white text-capitalize mb-3 animated fadeInUpBig animation-delay-1">ما
                                                        راه حل های تجاری ارائه می دهیم</h1>
                                                    <p className="para-desc text-white-50 mx-auto animated fadeInUpBig animation-delay-7">رنگ
                                                        رویایی خود را چاپ کنید خانه خود را به رنگهای پر جنب و جوش ببرید.
                                                        ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت قرار می
                                                        دهیم</p>
                                                    <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-12">
                                                        <a  onClick={'/'}
                                                           className="btn btn-custom mr-2 mb-2">درباره ما</a>
                                                        <a  onClick={'/'}
                                                           className="btn btn-outline-white mb-2">تماس با ما</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" style ={ { backgroundImage: "url("+image_03+")" } }>
                            <div className="bg-overlay"/>
                            <div className="home-center">
                                <div className="home-desc-center">
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                                <div className="title-heading text-center mt-5 pt-4">
                                                    <h1 className="heading text-white text-capitalize mb-3 animated fadeInUpBig animation-delay-1">برای
                                                        تجارت شما ساخته شده است</h1>
                                                    <p className="para-desc text-white-50 mx-auto animated fadeInUpBig animation-delay-7">رنگ
                                                        رویایی خود را چاپ کنید خانه خود را به رنگهای پر جنب و جوش ببرید.
                                                        ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت قرار می
                                                        دهیم</p>
                                                    <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-12">
                                                        <a  onClick={'/'}
                                                           className="btn btn-custom mr-2 mb-2">خرید کنید</a>
                                                        <a  onClick={'/'}
                                                           className="btn btn-outline-white mb-2">تماس با ما</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <a  onClick={'/'} className="carousel-control-prev"  role="button" href={'#carouselExampleControls'}
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">قبلی</span>
                    </a>
                    <a  onClick={'/'} className="carousel-control-next"   role="button"  href={'#carouselExampleControls'}
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">بعدی</span>
                    </a>
                </div>

            </section>
        )
    }
}
