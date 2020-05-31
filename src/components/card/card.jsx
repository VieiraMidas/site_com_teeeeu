import React from 'react'
import './card.css'

export default function Card(){
	return (
		<div className="card-serie">
			<div>
				<span className="material-icons fav-btn">favorite_border</span>
				<div className="poster-image"></div>
				<div className="card-detail">
					<h1 id="musica">Happier</h1>
					<h2 class="sub-itens">Marshmallow</h2>
					<h2 class="sub-itens">Eletrônica</h2>
				</div>
			</div>
		</div>
	);
}