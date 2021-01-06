import React from 'react';
import './styles.css';

import plus_btn from "../../images/plus.png"

export default function PlusButton (props){
	return(
		<div className='plus_btn clickable'>
			<img src={plus_btn}  className="plus_image"/>
		</div>
	)
}
