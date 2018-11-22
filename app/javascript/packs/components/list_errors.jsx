import React from 'react';

const ListErrors = (props) => {
    if (!props.errors) return null;

    const buildErrors = () => {
        return props.errors.map((error) => {
            return (<li>{error}</li>);
        });
    };

    return (
        <div>
            <ul>
                {buildErrors()}
            </ul>
        </div>
    )
}

export default ListErrors;
