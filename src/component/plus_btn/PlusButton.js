import React from 'react';
import './styles.css';

import plus_btn from "../../images/plus.png"
import {Link, NavLink} from "react-router-dom";

export default function PlusButton (props){
	return(
		<NavLink to={'/new_question'} className='plus_btn clickable select-protect' activeClassName="active_plus_btn">
			<img src={plus_btn}  className="plus_image"/>
		</NavLink>
	)
}
