import React from 'react'
import './test.css'
import Marcadores from './marcadores'
import Marcado from './marcado'

export default function Test(){
	return(
		<div className="teste-carrossel">
			<div id="item1" className="tela"></div>
			<div id="item2" className="tela"></div>
			<div id="item3" className="tela"></div>

			<figure className="item">
				<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/BTS_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg" alt="image" />
			</figure>

			<figure className="item">
				<img src="https://wallpapercave.com/wp/nUsV1kD.jpg" alt="image" />
			</figure>

			<figure className="item">
				<img src="https://portalwoods.com.br/wp-content/uploads/2019/10/thiaguinho.jpg" alt="image" />
			</figure>
		</div>
	)
}