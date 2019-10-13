import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import BlogContent from "./BlogContent";

export default class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            error: null,
            category_slug: '',
        };


    }

    componentDidMount() {

        fetch(""+process.env.REACT_APP_API_URL+'/blog?category_slug=بلاگ&&limit=5')
            .then(response => response.json())
            .then(json => this.setState({
                items: json.data.posts,
                category_slug: json.data.slug,
                isLoading: false
            }))
            .catch(error => console.log(error))
    }

    render() {
        const {error, isLoaded, items} = this.state;
        console.log(items)
        return (
            <div>
                <footer className="footer bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mt-4 pt-2">
                                <img src="images/business/logo-light.png" height="30" alt=""/>
                                <p className="text-foot mt-4">

                                    كلينيك ليزر مروارید در سال ۱۳92 تأسيس‌شده است كه تحت نظر پزشکان مجرب اقدام به لیزرموهای زاید نواحی مختلف بدن و صورت می نماید هم چنین با انجام دیگر کارهای متنوع به مشكلات زيبايي مي‌پردازد. وجه تمايز كلينيك ليزر مروارید با دیگر کلینیک های موجود در این منطقه اين است كه این کلینیک به صورت تمام وقت و حتی روزهای تعطیل اماده ارایه تمام خدمات مرتبط با پوست و مو می باشد
                                </p>
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
                                    <li><a href={'/about_us'} className="text-foot"><i className="mdi mdi-chevron-right  mr-2"/> درباره
                                        کلینیک مروارید</a>
                                    </li>
                                    <li><a href={'/blog'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> بلاگ ها
                                         </a></li>
                                    <li><a href={'/contact_us'} className="text-foot"><i className="mdi mdi-chevron-right mr-2"/> تماس با ما</a>
                                    </li>

                                </ul>
                            </div>


                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <h4 className="text-light text-uppercase footer-head">    مطالب مفید </h4>
                                <ul className="list-unstyled footer-list mt-4">

                                    {items.map(item => (<li>

                                        <a className="text-foot"
                                              href={"/blog-content/" + this.state.category_slug + "/" + item.slug}>
                                            <i className="mdi mdi-chevron-right mr-2"/> {item.title}
                                             </a>
                                      </li>
                                    ))}



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
