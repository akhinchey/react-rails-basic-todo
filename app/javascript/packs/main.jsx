import React from 'react';
import AllLists from './components/all_lists';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lists: null}
    }

    componentDidMount = () => {
        fetch('/lists.json')
        .then((response) => { return response.json() })
        .then((data) => {this.setState({ lists: data }) })
    }

    handleListSubmit = (e) => {
        e.preventDefault();
        const list = {title: this.listTitle.value}
        fetch('/lists', {
            method: 'POST',
            body: JSON.stringify({list: list}),
            headers: {
                'Content-Type':'application/json',
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
            },
        })
        .then((response) => { console.log(response) })
    }

    render () {
        if (!this.state.lists) {
            return null;
        }
        return (
            <div>
                <h1>Current Lists</h1>
                <AllLists lists={this.state.lists} />

                <form onSubmit={this.handleListSubmit}>
                    <input type="text" ref={ (input) => {this.listTitle = input} } />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
