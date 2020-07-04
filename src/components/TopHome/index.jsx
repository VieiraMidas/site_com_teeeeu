import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import "./top.css"

function Top(props){

	const [search,setSearch] = useState ("");
	
	function buscar(e){
		e.preventDefault()
		props.history.push("/busca?q="+search)
	}

	return(
		<div className="Header">
        	<div className="Logo">MTLyrics</div>
        	<h1>Música é vida</h1>
        	<div className="input-icon">
				<form onSubmit={buscar}>
					<input 
					type="text" 
					name="q" 
					id="q" 
					placeholder="Digite a sua música" 
					onChange={event=>setSearch(event.target.value)}/>
					<button type="submit" className="material-icons">search</button>
				</form>
			</div>
      	</div>
	)
}

export default withRouter(Top)