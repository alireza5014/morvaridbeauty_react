import React, {Component} from 'react';
import Meta from "./Meta";
import TariffeItems from "./TariffeItems";

export default class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            error: null,

        };


    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL+'/tariffe')
            .then(response => response.json())
            .then(json => this.setState({
                items: json.data,

                isLoading: false
            }))
            .catch(error => console.log(error))
    }


    render() {
        return (

            <section className="section" id="price">
                <Meta title={'نرخ های ما'} meta={[]}/>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h4 className="title text-uppercase mb-4">نرخ های ما</h4>

                            </div>
                        </div>

                    </div>


                    <div className="row">

                        {this.state.items.map(item => (
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="pricing-table border text-center rounded bg-white">
                            <h3 className="price-title p-4 bg-custom mb-0">{item.title}  </h3>
                            <div className="pricing-features">

                                <TariffeItems items={item.tariffe_items} />

                            </div>
                            <div className="price-value p-4 position-relative bg-light">
                            <div className="price-lable">
                            <h4 className="mb-0 rates">{item.price} تومان</h4>
                            </div>
                            </div>
                            <div className="price-button p-4">
                            <a href="#" className="btn btn-custom w-100"> دریافت نوبت </a>
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
