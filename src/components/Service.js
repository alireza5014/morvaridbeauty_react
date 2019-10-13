import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Meta from "./Meta";

const meta = {
    title: 'about',
    keywords: 'about',
    description: 'about',
}
export default class Service extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            error: null,
            count: 0,
            category_slug: '',
        };


    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL+'/blog?category_slug=خدمات&&limit=' + this.props.limit)
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
                <section className="section bg-light" id="services">
                    <Meta title={'خدمات کلینیک مروارید'} meta={[]}/>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="title text-uppercase mb-4">خدمات کلینیک</h4>

                                </div>
                            </div>

                        </div>


                        <div className="row">


                            {items.map(item => (

                                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                    <div className="service-container border-color border rounded p-4 text-center">
                                        <div className="number-icon position-relative">
                                            <div className="icon-2 d-inline-block border rounded-pill">
                                               <img className={'rounded-circle'} src={process.env.REACT_APP_BASE_URL + item.image_path} width={'60px'}/>
                                            </div>

                                            <div className="number text-center rounded-pill bg-white border">
                                                <span className="font-weight-bold">0</span>
                                            </div>
                                        </div>

                                        <div className="content mt-3">
                                            <h4 className="title text-dark"> {item.title}</h4>
                                            <p className="text-muted">    {item.abstract_content}</p>
                                            <Link className="text-dark"
                                                  to={"/blog-content/" + this.state.category_slug + "/" + item.slug}>مطالعه
                                                بیشتر<i
                                                    className="mdi mdi-chevron-right ml-1"/></Link>
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
