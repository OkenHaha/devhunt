import React from 'react'
import './Dev_Card.scss'
import { faker } from '@faker-js/faker'

const name = faker.name.findName()
const avatar = faker.image.avatar()

const Dev_Card = () => {
	return (
			<div className="dev_card_content">
				<span className="status"></span>
				<span className="rating">4.5/5</span>
				<span className="card_image">
				<img src={avatar} alt=""/>
				</span>
				<h1 className="dev_name">{name}</h1>
				<span className="dev_title">Front-end dev</span>
				<div className="dev_skills">
					<p>Javascript</p>
					<p>Javascript</p>
					<p>Javascript</p>
					<p>Javascript</p>
					<p>Javascript</p>
				</div>
				<button>Send a Message</button>
			</div>
	)
}

export default Dev_Card