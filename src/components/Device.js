import React, {Component} from 'react';
import Meta from "./Meta";
import {Link} from "react-router-dom";


export default class Device extends Component {


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
        fetch('http://localhost/morvaridbeauty/public/api/blog?category_slug=تجهیزات&&limit=' + this.props.limit)
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
        if (error) {
            console.log(error);
            return <div>Error: {error.message}</div>;
        } else if (isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="section" id="team">
                    <Meta title={' برخی از تجهیزات کلینیک مروراید'} meta={[]}/>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="title text-uppercase mb-4"> برخی از تجهیزات کلینیک مروراید</h4>
                                    <p className="text-muted mx-auto para-desc mb-0">رنگ رویایی خود را چاپ کنید خانه خود
                                        را
                                        به رنگهای پر جنب و جوش ببرید. ما ارائه خدمات انعطاف پذیر برای اسکان را در اولویت
                                        قرار می دهیم برای نیاز های شما</p>
                                </div>
                            </div>

                        </div>


                        <div className="row">

                            {items.map(item => (
                                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                    <div className="team-concept rounded text-center bg-white shadow">
                                        <div className="team-image position-relative">
                                            <img src={'http://localhost/morvaridbeauty/public'+item.image_path}
                                                 className="img-fluid rounded-top" alt="555"/>

                                        </div>
                                        <div className="content pt-4 pb-4">
                                            <h4 className="name text-uppercase mb-0">{item.title}</h4>



                                            <Link className="text-primary"
                                                  to={"/blog-content/" + this.state.category_slug + "/" + item.slug}>مطالعه
                                                بیشتر<i
                                                    className="mdi mdi-chevron-right ml-0"/></Link>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>


            )
        }
    }
}
