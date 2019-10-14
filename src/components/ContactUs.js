import React, {Component} from 'react';
import Meta from "./Meta";
import Parser from "html-react-parser";


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: "",
                content: ""
            },
            error: null,
            category_slug: '',
        };


    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL+'/contact_us')
            .then(response => response.json())
            .then(json => this.setState({
                data: json.data,
                isLoading: false
            }))
            .catch(error => console.log(error))
    }


    render() {

        const {error, isLoaded, data} = this.state;
        if (error) {
            console.log(error);
            return <div>Error: {error.message}</div>;
        } else if (isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <section className="section bg-light" id="contact">
                    <Meta title={'تماس با ما'} meta={data.metas}/>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 ">
                                <div className="section-title">
                                    <h4 className="title text-uppercase mb-4">{data.title}</h4>
                                    <p className="text-muted  " >
                                        {Parser(""+data.content)}

                                        </p>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col-md-7 mt-4 pt-2">
                                <div className="custom-form p-4 shadow">
                                    <div id="message"/>
                                    <form method="post" action="https://refubsy.netlify.com/layouts/php/contact.php"
                                          name="contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group position-relative mb-4">
                                                    <label htmlFor="name">نام شما <span
                                                        className="text-danger">*</span> :</label>
                                                    <input name="name" id="name" type="text" className="form-control"
                                                           placeholder="نام شما :"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group position-relative mb-4">
                                                    <label htmlFor="email">ایمیل شما <span
                                                        className="text-danger">*</span> :</label>
                                                    <input name="email" id="email" type="email" className="form-control"
                                                           placeholder="ایمیل شما :"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group position-relative mb-4">
                                                    <label htmlFor="subject">موضوع :</label>
                                                    <input name="subject" id="subject" className="form-control"
                                                           placeholder="موضوع شما :"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group position-relative mb-4">
                                                    <label htmlFor="comments">پیام شما <span
                                                        className="text-danger">*</span> :</label>
                                                    <textarea name="comments" id="comments" rows="4"
                                                              className="form-control" placeholder="پیام شما :"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                <input type="submit" id="submit" name="send"
                                                       className="submitBnt btn btn-custom w-100" value="ارسال پیام"/>
                                                <div id="simple-msg"/>
                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>


                            <div className="col-md-5 mt-4 pt-2">
                                <div className="map">
                                    <iframe width="600" height="500" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=%20%20%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9%20%20%D9%BE%D9%88%D8%B3%D8%AA%20%D9%88%20%D9%85%D9%88%20%D9%88%D9%84%DB%8C%D8%B2%D8%B1%20%D9%85%D8%B1%D9%88%D8%A7%D8%B1%DB%8C%D8%AF%20%D8%B4%D9%87%D8%B1%20%D9%82%D8%AF%D8%B3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0"
                                            marginWidth="0"></iframe>
                                </div>


                            </div>

                        </div>

                    </div>

                </section>


            )
        }
    }
}
