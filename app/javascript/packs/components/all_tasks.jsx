import React from 'react';

export default class AllTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    buildCompleted(task) {
        if (task.completed) return (<span>complete</span>)

        return (
            <input type="checkbox"
                   onChange={() => {this.props.markComplete(task.id)}}
                   checked={task.completed} />
        )
    }

    buildTasks() {
        return this.props.tasks.map((task, i) => {
            return (
                <li key={i}>
                    {task.desc}
                    {this.buildCompleted(task)}
                </li>
            )
        })
    }

    render () {
        if (!this.props.tasks) return null;

        return (
            <div>
                <ul>
                    {this.buildTasks()}
                </ul>
            </div>
        )
    }
}
