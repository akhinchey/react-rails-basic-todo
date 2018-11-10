import React from 'react';
import AllLists from './components/all_lists';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lists: null}
    }

    componentDidMount() {
        fetch('/lists.json')
        .then((response) => { return response.json() })
        .then((data) => {this.setState({ lists: data }) })
    }

    render () {
        if (!this.state.lists) {
            return null;
        }
        return (
            <div>
                <h1>Current Lists</h1>
                <AllLists lists={this.state.lists} />
            </div>
        )
    }
}
