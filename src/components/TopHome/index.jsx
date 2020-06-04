import React from 'react'
import "./top.css"

export default function Top(props){
	return(
		<div className="Header">
        	<div className="Logo">MTLyrics</div>
        	<h1>Música é vida</h1>
        	<div className="input-icon">
        		<input type="text" name="search" id="search" placeholder="Digite a sua música"/>
        		<span className="material-icons">search</span>
      		</div>
      	</div>
	)
}