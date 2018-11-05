const AllLists = (props) => {
    const lists = props.lists.map((list) => {
        return (
            <li>{list.title}</li>
        )
    })
    
    return (
        <ul>
            {lists}
        </ul>
    );
}
