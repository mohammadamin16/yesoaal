import React from 'react';
import './styles.css';
import my_questions_icon from "../../images/question.png";
import friends from "../../images/my-friends.png";
import invite_friends_icon from "../../images/add-friend.png";
import settings from "../../images/settings.png";
import {Link, NavLink} from "react-router-dom";

export default function Menu (){
	return(
		<div className='menu select-protect'>
			<div>
				<div className='menu_option pts'>
					<p className='points'>
						<span className='points_number'>183</span>
					</p>
				</div>
				<NavLink to={"/my_questions"} activeClassName="active_menu_option" className='menu_option clickable'>
					<img src={my_questions_icon} className='option_icon'/>
					<span className='menu-tooltip'>my question</span>
				</NavLink>
				<NavLink to={"/my_friends"} activeClassName="active_menu_option" className='menu_option clickable'>
					<img src={friends} className='option_icon'/>
					<span className='menu-tooltip'>my friends</span>
				</NavLink>
			</div>
			<div>
				<div className='menu_option clickable'>
					<img src={invite_friends_icon} className='option_icon'/>
					<span className='menu-tooltip'>invite your friends!</span>
				</div>
				<NavLink to={'/settings'} activeClassName="active_menu_option" className='menu_option clickable'>
					<img src={settings} className='option_icon'/>
						<span className='menu-tooltip'>settings</span>
				</NavLink>
			</div>
		</div>
	)
}
