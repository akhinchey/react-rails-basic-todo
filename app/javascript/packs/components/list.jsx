import React from 'react';
import AllTasks from './all_tasks';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            tasks: null,
            errors: null,
        }
    }

    componentDidMount() {
        const listData = JSON.parse(this.props.appData);
        this.setState({
            list: listData.list,
            tasks: listData.tasks,
        })
    }

    checkTask(id) {
        const newTasks = this.state.tasks.map((task) => {
            if (task.id === id) task.completed = true;
            return task;
        })
        this.setState({tasks: newTasks,})
    }

    handleTaskSubmit = (e) => {
        e.preventDefault();
        const listID = this.state.list.id;
        const task = {desc: this.taskDesc.value}
        fetch(`/lists/${listID}/tasks`, {
            method: 'POST',
            body: JSON.stringify({task: task}),
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json',
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
            },
        })
        .then(response => response.json())
        .then(data => this.setState({
            tasks: this.state.tasks.concat(data)
        }))
    }

    markTaskComplete = (id) => {
        const listID = this.state.list.id;
        fetch (`/lists/${listID}/tasks/${id}`, {
            method: 'PATCH',
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json',
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
            }
        })
        .then((response) => {
            if (response.ok) this.checkTask(id);
        })
    }

    render () {
        if (!this.state.list) return null;

        return (
            <div>
                <h1>{this.state.list.title}</h1>
                <AllTasks tasks={this.state.tasks}
                          markComplete={this.markTaskComplete} />
                
                <form onSubmit={this.handleTaskSubmit}>
                    <input type="text" ref={ (input) => {this.taskDesc = input} } />
                    <input type="submit" />
                </form>
                <a href="/">back</a>
            </div>
        )
    }
}
