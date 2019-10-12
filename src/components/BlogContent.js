import React, {Component} from 'react';
import Meta from "./Meta";
import Parser from 'html-react-parser';
const meta = {
    title: 'BlogDetail1',
    keywords: 'BlogDetail',
    description: 'BlogDetail',
}

export default class BlogContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            meta: [],
            isLoading: false,
            error: null,

        };


    }


    componentDidMount() {


        console.log(this.props);

        const data = {
            category_slug: this.props.match.params.category_slug,
            post_slug: this.props.match.params.post_slug
        };


        fetch(`http://localhost/morvaridbeauty/public/api/postContent?category_slug=${encodeURIComponent(data.category_slug)}&post_slug=${encodeURIComponent(data.post_slug)}`, {
            method: "GET",

        })
            .then(response => response.json())

            .then(json => this.setState({
                items: json.data,
                meta: json.data.metas,

                isLoading: false
            }))
            .catch(error => console.log(error))

     }


    render() {
        const {error, isLoaded, items,meta} = this.state;

        console.log(items)

        if (error) {
            console.log(error);
            return <div>Error: {error.message}</div>;
        }
        else if (!items) {
            return <div>404...</div>;
        }
        else if (isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (

                <section className="section">
                    <Meta title={items.title} meta={meta}/>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title mb-0 mr-0 mr-md-4">
                                    <h4 className="title text-uppercase mb-4">{items.title}</h4>
                                    <p className="text-muted">
                                   {Parser(""+items.content)}

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            )
        }
    }
}
