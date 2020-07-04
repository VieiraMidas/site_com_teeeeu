import React,{Fragment,useState,useEffect} from 'react'
import Axios from 'axios'
import './busca.css'

import Sinopse from '../../components/sinopse/sinopse'
import Lista from '../../components/lista/lista'
import Header from '../../components/Header/header'

export default function Busca(props){

    const [musics, setMusics] = useState([])

    const urlAPI = " https://api.vagalume.com.br/search.artmus" +
    props.location.search + 
    "&apikey=4f78e86f96cf6b0b2ed61d543c74d95a&language=pt-BR"

    useEffect (()=>{load()}, [props.location.search] )

    async function load(){
        try{
            const resposta = await Axios.get(urlAPI)
            setMusics(resposta.data.response.docs)
            console.log(props.location)
        }catch(e){
            console.log(e)
        } 
    }

    return(
        <Fragment>
            <Sinopse />
            <Header />
            <h1 id="resp">Resposta:</h1>
            <div className="rep">
                {musics.map((music)=> <Lista key={music.id} music={music}/>)}
            </div>
        </Fragment>
    )
}