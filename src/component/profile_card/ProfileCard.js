import React from 'react';
import './styles.css';
import user1 from '../../images/businessman.png'
import badge_icon from '../../images/strong.png'

export default function ProfileCard (){
	return(
		<div className='profile_card'>
			<div className="avatar_container">
				<img src={user1} className='big_avatar' />
				<div className="point_badge">857</div>
			</div>
			<div className='divider' />
			<div className="profile_card_info">
				<span className="name clickable">Mohammad Amin Tootoonchi</span>
				<span className="username clickable">@naghi</span>
				<span className="status">Studing at Rouzbeh</span>
				<span className="joined_date">Joined 3 weeks ago</span>
				<span className='badge'>
					Great Contributor
					<img src={badge_icon} className='badge_icon' />
				</span>
			</div>

		</div>
	)
}
