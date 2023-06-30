import React from 'react';

function Option(props: any) {

    return(
        <li>
            <button className={props.className}
            onClick={props.onClick} >
                {props.text}
            </button>
        </li>
    )
}

export default Option;