import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
        }
    }

    componentDidMount = () => {
        const list = JSON.parse(this.props.appData);
        this.setState({
            list: list,
        })
    }

    render () {
        if (!this.state.list) return null;

        return (
            <div>
                <h1>{this.state.list.title}</h1>
            </div>
        )
    }
}
