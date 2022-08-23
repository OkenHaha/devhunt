import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/logo.svg'
const Navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="logo">
					<img src={Logo} alt="logo"/>
					<ul className="link-items">
						<li className="link-item">
							For Employers
							<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.34572 0H18.6543C19.8517 0 20.4504 1.4463 19.6028 2.29391L10.9519 10.9515C10.4272 11.4763 9.57283 11.4763 9.04813 10.9515L0.397216 2.29391C-0.450385 1.4463 0.148317 0 1.34572 0Z" fill="#F6C90E"/>
							</svg>
						</li>
						<li className="link-item">
							For Freelancers
							<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.34572 0H18.6543C19.8517 0 20.4504 1.4463 19.6028 2.29391L10.9519 10.9515C10.4272 11.4763 9.57283 11.4763 9.04813 10.9515L0.397216 2.29391C-0.450385 1.4463 0.148317 0 1.34572 0Z" fill="#F6C90E"/>
							</svg>
						</li>
					</ul>
				</div>
				<input type="text" placeholder="type java, html or any"/>
				<div className="menu">
					
					<button>Find a Developer</button>
					<a href="#">Login</a>
				</div>
			</nav>
		</div>
	)
}

export default Navbar