import React, {Component} from 'react';
import {Helmet} from "react-helmet";

export default class Meta extends Component {


    render() {
        if (this.props.meta) {
            return (
                <Helmet>
                    <title>{this.props.title}</title>
                    {this.props.meta.map(item => (
                        <meta name={item.key} content={item.value}/>
                    ))}
                </Helmet>
            )
        } else {
            return (<Helmet>
                <title>{this.props.title}11111</title>

            </Helmet>);
        }
    }

}
