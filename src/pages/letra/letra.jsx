import React,{Fragment} from 'react'
import './letra.css'

import Sinopse from "../../components/sinopse/sinopse"

export default function Letra(){
    return(
        <Fragment>
            <Sinopse />
            <div className="Letra-layout">
                <h1 className="ti">Letra</h1>
            </div>
        </Fragment>
    );
}