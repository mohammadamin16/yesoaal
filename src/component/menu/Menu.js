import React from 'react';
import './styles.css';
import my_questions_icon from "../../images/question.png";
import friends from "../../images/my-friends.png";
import invite_friends_icon from "../../images/add-friend.png";
import settings from "../../images/settings.png";

export default function Menu (){
	return(
		<div className='menu'>
			<div>
				<div className='menu_option pts'>
					<p className='points'>
						<span className='points_number'>183</span>
					</p>
				</div>
				<div className='menu_option clickable'>
					<img src={my_questions_icon} className='option_icon'/>
					<span className='menu-tooltip'>my question</span>
				</div>
				<div className='menu_option clickable'>
					<img src={friends} className='option_icon'/>
					<span className='menu-tooltip'>friends</span>
				</div>
			</div>
			<div>
				<div className='menu_option clickable'>
					<img src={invite_friends_icon} className='option_icon'/>
					<span className='menu-tooltip'>invite your friends!</span>
				</div>
				<div className='menu_option clickable'>
					<img src={settings} className='option_icon'/>
					<span className='menu-tooltip'>settings</span>
				</div>
			</div>
		</div>
	)
}
