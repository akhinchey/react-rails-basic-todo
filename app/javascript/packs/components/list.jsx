import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
        }
    }

    // componentDidMount = () => {
    //     fetch(`/lists/${}`)
    // }

    render () {
        return (
            <div>
                Hello World
            </div>
        )
    }
}
