import React from 'react';

const AllTasks = (props) => {
    const tasks = props.tasks.map((task, i) => {
        return (
            <li key={i}>
                {task.desc}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {tasks}
            </ul>
        </div>
    )
}

export default AllTasks;
