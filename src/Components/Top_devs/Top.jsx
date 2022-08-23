import React from 'react'
import DevCard from '../DevCard/Devcard'
import './Top.scss'

const Top = () => {
	return (
		<div className="top">
			<div className="top_devs">
				<div className="top_content">
					<h1 className="top_title">Hire Pre-Screened Freelance Developers</h1>
					<DevCard/>
				</div>
			</div>

			<div className="slide_button">
				<span className="dot active"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</div>
		</div>
	)
}

export default Top