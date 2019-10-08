import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mt-4 pt-2">
                                <img src="images/business/logo-light.png" height="30" alt=""/>
                                <p className="text-foot mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                    با استفاده از طراحان گرافیک است.</p>
                                <ul className="list-unstyled social-icon social mb-0">

                                    <li key={2} className="list-inline-item"><a href={'/'}><i className="mdi mdi-linkedin"
                                                                                              title="linkedin"/></a></li>
                                    <li key={3} className="list-inline-item"><a href={'/'}><i className="mdi mdi-dribbble"
                                                                                              title="dribbble"/></a></li>
                                    <li key={4} className="list-inline-item"><a href={'/'}><i className="mdi mdi-instagram"
                                                                                              title="instagram"/></a></li>
                                    <li key={5} className="list-inline-item"><a href={'/'}><i className="mdi mdi-twitter"
                                                                                              title="twitter"/></a></li>
                                </ul>

                            </div>

                            <div className="col-lg-2 col-md-4 mt-4 pt-2">
                                <h4 className="text-light text-uppercase footer-head">لینک ها</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right  mr-2"/> درباره
                                        ریفابسی</a>
                                    </li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> حریم
                                        شخصی</a></li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> داوطلب</a>
                                    </li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> علل
                                        محبوب</a></li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> رویدادهای
                                        آینده</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <h4 className="text-light text-uppercase footer-head">پشتیبانی های ما</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><a href={'/'}   className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> تماس با
                                        ما</a></li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> ارسال
                                        تیکت</a></li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> حریم ریفابسی</a>
                                    </li>
                                    <li><a href={'/'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> خدمات پس از
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
                <hr/>
                    <footer className="footer-two bg-dark text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <p className="mb-0">© 1398 کلیه حقوق این سایت متعلق به کلینیک مروارید می باشد <i
                                        className="mdi mdi-heart text-danger"/></p>
                                </div>

                            </div>

                        </div>

                    </footer>


                    <a href="#" className="back-to-top text-center shadow rounded-pill border" id="back-to-top">  <i className="mdi mdi-chevron-up d-block" />  </a>

            </div>



        )
    }
}
