import React from 'react'

export default function Image(props) {
    return (
        <div>
            <img src={props.source} alt="" />
            {console.log(props.source)}
        </div>
    )
}
