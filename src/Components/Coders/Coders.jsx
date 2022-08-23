import React from 'react'
import Dev_Card from '../DevCard/Dev_Card'
import './Coders.scss'
const Coders = () => {
	return (
		<div className="coders">
		<h1>Client Rate coders based on  3000 clients</h1>
			<div className="coder_list">
				<div className="coder_row">
					<Dev_Card/>
					<Dev_Card/>
					<Dev_Card/>
				</div>
				<div className="coder_row">
					<Dev_Card/>
					<Dev_Card/>
					<Dev_Card/>
				</div>
				<div className="coder_row">
					<Dev_Card/>
					<Dev_Card/>
					<Dev_Card/>
				</div>
			</div>
		</div>
	)
}

export default Coders