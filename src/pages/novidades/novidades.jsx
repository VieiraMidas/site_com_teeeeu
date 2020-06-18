import React from 'react'
import CardSerie from "../../components/card/card"
import Top from "../../components/TopHome/index"
import Carrossel from "../../components/carrossel/carrossel"

export default function Novidades(){
    return(
        <>
            <Top />
            <h1 id="h1">+ Acessados</h1>
            <div className="content">
      	        <CardSerie />
      	        <CardSerie />
      	        <CardSerie />
      	        <CardSerie />
            </div>
            <h1 id="h1">+ Notícias</h1>
            <Carrossel />
            <p>more</p>
        </>
    );
}
