import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import './header.css'

function Header(props){

    const [search,setSearch] = useState ("");

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?q="+search)
    }

    return(
        <div className="busca-layout">
                <div className="Logo-busca">MTLyrics</div>
                <div className="input-busca">
                    <form onSubmit={buscar}>
                        <input 
                            type="text" 
                            name="q" 
                            id="q" 
                            placeholder="Digite a sua música" 
                            onChange={ event => setSearch(event.target.value)} 
                        />
                        <button type="submit" className="material-icons">search</button>
                    </form>
			    </div>
            </div>
    )
}

export default withRouter(Header)