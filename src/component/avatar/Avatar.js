import React from 'react';
import './styles.css';

export default function Avatar (props){
	return(
		<img src={props.image} className="tag_avatar"/>
	)
}
