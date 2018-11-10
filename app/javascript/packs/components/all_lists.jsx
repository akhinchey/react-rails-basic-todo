import React from 'react';

const AllLists = (props) => {
    const lists = props.lists.map((list, i) => {
        return (
            <li key={i}>{list.title}</li>
        )
    })
    
    return (
        <ul>
            {lists}
        </ul>
    );
}

export default AllLists;
