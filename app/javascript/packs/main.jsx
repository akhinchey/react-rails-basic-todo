import React from 'react';
import AllLists from './components/all_lists';
import ListErrors from './components/list_errors';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: null,
            errors: null,
        }
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
            credentials: 'same-origin',
            body: JSON.stringify({list: list}),
            headers: {
                'Content-Type':'application/json',
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                this.setState({errors: data.errors})
            } else {
                this.setState({
                    lists: this.state.lists.concat(data),
                    errors: null,
                })
            }
        })
        .catch(error => console.log(error))

        e.target.reset();
    }

    handleListDelete = (id) => {
        fetch(`/lists/${id}`, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json',
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
            }
        })
        .then(() => { this.deleteList(id)})
    }

    deleteList (id) {
        const newLists = this.state.lists.filter(list => list.id !== id)
        this.setState({
            lists: newLists,
        })
    }


    render () {
        if (!this.state.lists) return null;

        return (
            <div>
                <h1>Current Lists</h1>
                <ListErrors errors={this.state.errors} />
                <AllLists lists={this.state.lists}
                          handleDelete={this.handleListDelete} />

                <form onSubmit={this.handleListSubmit}>
                    <input type="text" ref={ (input) => {this.listTitle = input} } />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
