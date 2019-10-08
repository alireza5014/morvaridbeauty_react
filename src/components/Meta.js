import React, {Component} from 'react';
import {Helmet} from "react-helmet";

export default class Helmet extends Component {


    render() {
        return (
            <Helmet>
                <title>Ideas || MysiteName</title>
                <meta name="keywords" content="HTML,CSS,JavaScript"/>
                <meta
                    name="description"
                    content="Ideas page using react helmet very easy to implement "
                />
            </Helmet>
        )
    }
}
