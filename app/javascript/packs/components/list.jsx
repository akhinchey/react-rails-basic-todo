import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            tasks: null,
        }
    }

    componentDidMount = () => {
        const listData = JSON.parse(this.props.appData);
        this.setState({
            list: listData.list,
            tasks: listData.tasks,
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
