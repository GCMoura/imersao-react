import React from 'react'

function ButtonLink(props) {

    console.log(props) //importante ver isso no console
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink