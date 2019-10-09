import React, {Component} from 'react';

export default class TariffeItems extends Component {


    render() {
        if (this.props.items.length > 0) {
            return (

                <ul className="list-unstyled p-4 mb-0">
                    {
                        this.props.items.map(item => (
                        <li className="border-0"> {item.title}</li>
                        ))
                    }

                </ul>

            )
        }
    }

}
