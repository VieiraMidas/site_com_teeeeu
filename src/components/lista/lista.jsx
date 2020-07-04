import React from 'react'
import './lista.css'

export default function Lista({music}){
    return(
        <div className="Lista">
            <h1>{music.band} - {music.title}</h1>
        </div>
    )
}