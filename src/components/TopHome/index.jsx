import React from 'react'
import "./top.css"

export default function Top(props){
	return(
		<div className="Header">
        	<div className="Logo">MTLyrics</div>
        	<input type="text" name="search" id="search" placeholder="Digite a sua música"/>
			<span id="search-icon" className="material-icons">search</span>
      	</div>
	)
}