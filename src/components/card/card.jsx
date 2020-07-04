import React from 'react'
import './card.css'

export default function Card({music}){
	return (
		<div className="card-serie">
			<div>
				<span className="material-icons inf-btn">info</span>
				<div className="poster-image"
				style= {{ backgroundImage: `url(${music.pic_src}`}}></div>
				<div className="card-detail">
					<h1 id="musica">{music.musTitle}</h1>
					<h2 className="sub-itens">{music.title}</h2>
					<h2 className="sub-itens">{music.date_fmt}</h2>
				</div>
			</div>
		</div>
	);
}