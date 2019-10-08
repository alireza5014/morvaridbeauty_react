import React, {Component} from 'react';
import axios from 'axios';
import Meta from "./Meta";
import {Link} from "react-router-dom";

const meta={
    title:'blog',
    keywords:'blog',
    description:'descriptionblog',
}

export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            error: null,
        };


    }
    getStories() {
        this.setState({
            items : [334]
        });

        fetch('https://jsonplaceholder.typicode.com/todos/1'
        // fetch('http://localhost/morvaridbeauty/public/api/post'
             )
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error=>console.log(error))


    }




    componentDidMount() {


        this.getStories()

        console.log(this.state);
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            console.log(error);

            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }


    // render() {
    //
    //     return (
    //         <section className="section">
    //
    //             <Meta meta={meta} />
    //
    //
    //             <div className="container">
    //                 <div className="row justify-content-center">
    //                     <div className="col-12">
    //                         <div className="section-title text-center">
    //                             <h4 className="title text-uppercase mb-4">اخبار و بلاگ ما</h4>
    //                             <p className="text-muted mx-auto para-desc mb-0">رنگ رویایی خود را چاپ کنید خانه خود را
    //                                 به رنگهای پر جنب و جوش ببرید. ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت
    //                                 قرار می دهیم</p>
    //                         </div>
    //                     </div>
    //
    //                 </div>
    //
    //                 <div className="row">
    //                     <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                         <div className="blog-post rounded shadow">
    //                             <img src={require('../images/business/blog01.jpg')} className="img-fluid rounded-top"
    //                                  alt=""/>
    //                             <div className="content pt-4 pb-4 p-3">
    //                                 <a><h6
    //                                     className="tag text-custom font-weight-normal">ملاقات</h6></a>
    //                                 <a><h4 className="title text-dark">چگونه می توان بهره
    //                                     وری را افزایش داد؟</h4></a>
    //                                 <p className="text-muted pb-3 border-bottom">این یک فرهنگ لغت از بیش از 200 کلمه
    //                                     لاتین ، همراه با تعداد انگشت شماری از ساختارهای جمله</p>
    //                                 <ul className="list-unstyled post-meta mb-0">
    //                                     <li className="float-right">
    //                                         <Link className="text-dark" to="/blog-content/1/2">مطالعه بیشتر<i
    //                                             className="mdi mdi-chevron-right ml-1"/></Link>
    //                                     </li>
    //                                     <li className="text-muted"><i className="mdi mdi-calendar-edit mr-1"/>مرداد
    //                                         1398
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //
    //                         </div>
    //
    //                     </div>
    //
    //
    //                     <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                         <div className="blog-post rounded shadow">
    //                             <img src={require('../images/business/blog02.jpg')} className="img-fluid rounded-top"
    //                                  alt=""/>
    //                             <div className="content pt-4 pb-4 p-3">
    //                                 <a><h6
    //                                     className="tag text-custom font-weight-normal">مالی</h6></a>
    //                                 <a><h4 className="title text-dark">تحلیل گزارش
    //                                     مالی</h4></a>
    //                                 <p className="text-muted pb-3 border-bottom">لورم ایپسوم متن ساختگی با تولید
    //                                     سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
    //                                 <ul className="list-unstyled post-meta mb-0">
    //                                     <li className="float-right">
    //                                         <Link className="text-dark" to="/blog-content/1/6">مطالعه بیشتر<i
    //                                             className="mdi mdi-chevron-right ml-1"/></Link>
    //                                     </li>
    //                                     <li className="text-muted"><i className="mdi mdi-calendar-edit mr-1"/>مرداد
    //                                         1398
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //
    //                         </div>
    //
    //                     </div>
    //
    //
    //                     <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    //                         <div className="blog-post rounded shadow">
    //                             <img src={require('../images/business/blog03.jpg')} className="img-fluid rounded-top"
    //                                  alt=""/>
    //                             <div className="content pt-4 pb-4 p-3">
    //                                 <a><h6
    //                                     className="tag text-custom font-weight-normal">زیردستان</h6></a>
    //                                 <a><h4 className="title text-dark">جلسات سالانه با
    //                                     کارگران</h4></a>
    //                                 <p className="text-muted pb-3 border-bottom">لورم ایپسوم متن ساختگی با تولید
    //                                     سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
    //                                 <ul className="list-unstyled post-meta mb-0">
    //                                     <li className="float-right">
    //                                         <Link className="text-dark" to="/blog-content/1/3">مطالعه بیشتر<i
    //                                             className="mdi mdi-chevron-right ml-1"/></Link>
    //                                     </li>
    //                                     <li className="text-muted"><i className="mdi mdi-calendar-edit mr-1"/>مرداد
    //                                         1398
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //
    //                         </div>
    //
    //                     </div>
    //
    //                 </div>
    //
    //             </div>
    //
    //         </section>
    //     )
    // }
}
