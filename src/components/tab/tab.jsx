import React from 'react'
import {NavLink} from 'react-router-dom'
import './tab.css'

export default function Tab(props){
    return(
    <NavLink className="nav-link" to={props.link}>{props.text}</NavLink>
    )
}