import React, {Fragment,useEffect, useState} from 'react'
import Axios from 'axios'

import CardSerie from "../../components/card/card"
import Top from "../../components/TopHome/index"
import Carrossel from "../../components/carrossel/carrossel"


export default function Novidades(){

    const [musics, setMusics] = useState([])
    
    useEffect(() => load(), [])

    async function load(){
        try{
        const resposta = await Axios.get("http://api.vagalume.com.br/hotspots.php?apikey=%7Bkey%7D&language=pt-BR")
        setMusics(resposta.data.hotspots)
        console.log(resposta.data.hotspots)
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <Fragment>
            <Top />
            <h1 id="h1">+ Acessados</h1>
            <div className="content">
                {musics.map((music) => <CardSerie key={music.id} music={music}/>)}
            </div>
            <h1 id="h1">+ Notícias</h1>
            <Carrossel />
            <p>more</p>
        </Fragment>
    );
}
