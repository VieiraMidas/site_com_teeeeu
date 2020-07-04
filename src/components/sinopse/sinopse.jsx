import React from 'react'
import Tab from '../tab/tab'

export default function Sinopse(){
    return(
        <div className="tabs">
            <Tab text="Novidades" link="novidades" />
            <Tab text="Busca" link="busca" />
            <Tab text="Letra" link="letra" />
        </div>
    )
}