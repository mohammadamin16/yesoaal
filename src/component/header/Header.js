import React from 'react';
import './styles.css';
import avatar from "../../images/man.png";
import Searchbar from "../searchbar";
import logo from "../../images/raise-hand.png";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className='header'>
			<div className='user_info'>
				<img src={avatar} className='avatar'/>
				<span className='username'>Mohammad Amin Tootoonchi</span>
			</div>
			<Searchbar />
			<div className='trademark'>
				<Link to={"/"} >
					<span className='site_name'>Solve It</span>
					<img src={logo} className='logo'/>
				</Link>
			</div>
		</div>
	)
}

