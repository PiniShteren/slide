import React from 'react'

export default function Post(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <button onClick={() => {
                props.delete(props.index);
            }}>X</button>
        </div>
    )
}

