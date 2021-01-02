import React from 'react';
import './styles.css';
import avatar from "../../images/man.png";
import Searchbar from "../searchbar";
import logo from "../../images/raise-hand.png";

export default function Header() {
	return (
		<div className='header'>
			<div className='user_info'>
				<img src={avatar} className='avatar'/>
				<span className='username'>Mohammad Amin Tootoonchi</span>
			</div>
			<Searchbar />
			<div className='trademark'>
				<span className='site_name'>Solve It</span>
				<img src={logo} className='logo'/>
			</div>
		</div>
	)
}

