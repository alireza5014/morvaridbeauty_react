import React, {Component} from 'react';
import {Helmet} from "react-helmet";

export default class Meta extends Component {


    render() {

        return (

            <Helmet >
                <title>{this.props.meta.title}</title>
                <meta name="keywords" content={this.props.meta.keywords}/>
                <meta
                    name="description"
                    content={this.props.meta.description}
                />
            </Helmet>
        )
    }
}
