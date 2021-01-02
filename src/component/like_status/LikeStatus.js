import React from 'react';
import './styles.css';
import Avatar from "../avatar";
import like_icon from "../../images/like.png";

export default function LikeStatus(props) {
	return (
		<div className={props.disabled ? "like_status not-allowed opacity-50" : "like_status"}>
			<img src={like_icon} className='like_icon clickable'/>
			<span className='like_number'>{props.number}</span>
			<img src={like_icon} className='like_icon dislike_icon clickable'/>
		</div>
	)
}

