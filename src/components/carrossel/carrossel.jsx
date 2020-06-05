import React from 'react'
import './carrossel.css'
import Marcadores from './marcadores'
import Marcado from './marcado'

export default function Carrossel(){
	return (
		<div className="Carrossel">
			<div className="Imagem" >
				<div className="marcadores-separacao">
					<Marcado/>
					<Marcadores />
					<Marcadores />
				</div>
				<div className="Informacao" />
				<h2>BTS vai fazer live paga em junho</h2>
			</div>
		</div>
	)
}