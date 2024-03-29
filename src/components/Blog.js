import React, {Component} from 'react';
import Meta from "./Meta";
import {Link} from "react-router-dom";

const metas=[
    {
        key:"keywords",
        value:"مطالب در مورد لیزر موهای زائد ، لیزر موهای زاید ، کلینیک در شهر قدس ، لیزر مو در شهر قدس"
    },
    {
        key:"description",
        value:"مطالب در مورد لیزر موهای زائد "}
];
export default class Blog extends Component {

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

        fetch(''+process.env.REACT_APP_API_URL+'/blog?category_slug=بلاگ&&limit='+this.props.limit)
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

                <section className="section">

                    <Meta title={'اخبار و بلاگ ما'} meta={metas}/>


                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h4 className="title text-uppercase mb-4">اخبار و بلاگ ما</h4>

                                </div>
                            </div>

                        </div>

                        <div className="row">


                            {items.map(item => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                    <div className="blog-post rounded shadow">
                                        <img src={process.env.REACT_APP_BASE_URL + item.image_path}
                                             className="img-fluid rounded-top"
                                             alt=""/>
                                        <div className="content pt-4 pb-4 p-3">
                                            <a><h6
                                                className="tag text-custom font-weight-normal">ملاقات</h6></a>
                                            <a><h4 className="title text-dark"> {item.title}</h4></a>
                                            <p className="text-muted pb-3 border-bottom">
                                                {item.abstract_content}
                                            </p>
                                            <ul className="list-unstyled post-meta mb-0">
                                                <li className="float-right ">
                                                    <Link className="text-dark ml-2"
                                                          to={"/blog-content/" + this.state.category_slug + "/" + item.slug}>مطالعه
                                                        بیشتر<i
                                                            className="mdi mdi-chevron-right ml-1"/></Link>
                                                </li>
                                                <li  className=" ml-2 float-left text-muted"><i className="mdi mdi-calendar-edit  "/>
                                                    {item.created_at}
                                                </li>

                                                <li className=" float-left mr-2 text-muted"><i className="mdi mdi-comment    "/> 5</li>
                                                <li className="mr-2   text-muted"><i className="mdi mdi-heart mr-1  "/> 33</li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            ))}


                        </div>

                    </div>

                </section>

            );
        }
    }


}
