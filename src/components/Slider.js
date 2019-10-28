import React, {Component} from 'react';

export default class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            active: true,
            isLoading: false,
            error: null,
            count: 0,
            category_slug: '',
        };


    }


    componentDidMount() {

        fetch(''+process.env.REACT_APP_API_URL+'/slider')
            .then(response => response.json())
            .then(json => this.setState({
                items: json.data,

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
                <section className="home-slider position-relative" id="home">


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">

                            {items.map(item => (
                            <div className={"carousel-item "+item.status} style={{backgroundImage: "url(" + process.env.REACT_APP_BASE_URL+  item.image_path + ")"}}>
                                <div className="bg-overlay"/>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container-fluid">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-12">
                                                    <div className="title-heading text-center mt-5 pt-4">
                                                        <h1 className="heading text-white text-capitalize mb-3 animated fadeInUpBig animation-delay-1">
                                                            {item.title}
                                                         </h1>
                                                        <p className="para-desc text-white  mx-auto animated fadeInUpBig animation-delay-7">
                                                            {item.description}</p>
                                                        <div  className="mt-4 pt-2 animated fadeInUpBig animation-delay-12">

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                                )
                                )}

                        </div>

                        <a onClick={'/'} className="carousel-control-prev" role="button"
                           href={'#carouselExampleControls'}
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">قبلی</span>
                        </a>
                        <a onClick={'/'} className="carousel-control-next" role="button"
                           href={'#carouselExampleControls'}
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">بعدی</span>
                        </a>
                    </div>

                </section>
            )
        }
    }
}
