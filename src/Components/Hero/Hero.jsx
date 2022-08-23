import React from 'react'
import './Hero.scss'

const Hero = () => {
	return (
		<div className="hero">
			<div className="title">
				<h1>Hire The World’s Best known <span>Developers</span></h1>
			</div>
			<div className="sub-heading">
				<p>
					Forget the old rules. You can have the best people.
				</p>
				<p>Right now. Right here.</p>
			</div>
			<div className="cta">
				<input type="text" placeholder="type java, html or any"/>
				<button>Find a Developer</button>
			</div>
		</div>
	)
}

export default Hero