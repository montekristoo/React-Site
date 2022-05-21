import React from 'react'
import Link from 'react-router';


export default function Tutorial (props) {
    return (
        <>
        <div className="tutorial--box">
            <a href={props.a} className="tutorial--name"><span>{props.name}</span></a>
        </div>
        </>
    )
}