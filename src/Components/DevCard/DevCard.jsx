import React from 'react'
import './DevCard.scss'
import { faker } from '@faker-js/faker'

const dev_img = faker.image.people(600, 800)
const logo = faker.image.avatar()
const DevCard = () => {
	return (
		<div className="card">			
			<div className="top_card">
				<img src={dev_img} alt=""/>
			</div>
			
			<div className="bottom_card">
				<h1 className="card_name">John Ja</h1>
				<p className="dev_role">Senior React Developer</p>

				<span>Previously at <img src={logo} alt=""/></span>
				
			</div>
		</div>
	)
}
export default DevCard