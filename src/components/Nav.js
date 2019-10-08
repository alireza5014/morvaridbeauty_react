import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mt-4 pt-2">
                            <img src="images/business/logo-light.png" height="30" alt=""/>
                            <p className="text-foot mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                با استفاده از طراحان گرافیک است.</p>
                            <ul className="list-unstyled social-icon social mb-0">
                                <li key={1} className="list-inline-item"> asas</li>
                                <li key={2} className="list-inline-item"><a><i className="mdi mdi-linkedin"
                                                                               title="linkedin"/></a></li>
                                <li key={3} className="list-inline-item"><a><i className="mdi mdi-dribbble"
                                                                               title="dribbble"/></a></li>
                                <li key={4} className="list-inline-item"><a><i className="mdi mdi-instagram"
                                                                               title="instagram"/></a></li>
                                <li key={5} className="list-inline-item"><a><i className="mdi mdi-twitter"
                                                                               title="twitter"/></a></li>
                            </ul>

                        </div>

                        <div className="col-lg-2 col-md-4 mt-4 pt-2">
                            <h4 className="text-light text-uppercase footer-head">لینک ها</h4>
                            <ul className="list-unstyled footer-list mt-4">
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right  mr-2"></i> درباره
                                    ریفابسی</a>
                                </li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> حریم
                                    شخصی</a></li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> داوطلب</a>
                                </li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> علل
                                    محبوب</a></li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> رویدادهای
                                    آینده</a>
                                </li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <h4 className="text-light text-uppercase footer-head">پشتیبانی های ما</h4>
                            <ul className="list-unstyled footer-list mt-4">
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> تماس با
                                    ما</a></li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> ارسال
                                    تیکت</a></li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> حریم ریفابسی</a>
                                </li>
                                <li><a className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> خدمات پس از
                                    فروش</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 mt-4 pt-2">
                            <h4 className="text-light text-uppercase footer-head">ساعات کارس</h4>
                            <ul className="list-unstyled text-foot mt-4 mb-0">
                                <li>شنبه - چهار شنبه : 9:00 از 17:00</li>
                                <li className="mt-2">پنج شنبه : 10:00 از 15:00</li>
                                <li className="mt-2">جمعه : تعطیل</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
