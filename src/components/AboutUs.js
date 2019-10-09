import React, {Component} from 'react';
import Meta from "./Meta";

export default class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            error: null,
            category_slug: '',
        };


    }


    componentDidMount() {
        fetch('http://localhost/morvaridbeauty/public/api/about_us')
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

                <section className="section" id="about">
                    <Meta title={"درباره کلینیک مروارید"} meta={data.metas}/>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <div className="section-title mb-0 mr-0 mr-md-4">
                                    <h4 className="title text-uppercase mb-4">{data.title}</h4>
                                    <p className="text-muted">  {data.content}   </p>
                                    <a href={'/'} className="btn btn-custom ">مطالعه بیشتر <i
                                        className="mdi mdi-chevron-right"/></a>
                                </div>

                            </div>

                            <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <img src={'http://localhost/morvaridbeauty/public' + data.image_path}
                                         className="img-fluid shadow rounded" alt=""/>
                                    <div className="play-icon">
                                        <a href="http://vimeo.com/7396421" className="video-play-icon text-center"
                                           title="تماشا کن">
                                            <i className="mdi mdi-play text-white rounded-pill"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


            )
        }
    }
}
