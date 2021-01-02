import React from 'react';
import './styles.css';
import Avatar from "../avatar";

export default function Tag(props) {
	return (
		<div className={props.secondary ? 'asked_by_tag secondary_color_tag' : 'asked_by_tag'}>
			<Avatar image={props.image} />
			<div className='tag_text'>
				{props.text}
			</div>
		</div>
	)
}

