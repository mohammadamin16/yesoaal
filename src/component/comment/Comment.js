import React from 'react';
import './styles.css';
import Avatar from "../avatar";
import user1 from '../../images/businessman.png'

export default function Comment (){
	return(
		<div className='comment'>
			<div className='comment_owner' >
				<Avatar image={user1} />
				<span className='comment_owner_username'>Ali</span>
			</div>
			<span className='comment_text'>
				this is a comment
			</span>
		</div>
	)
}
