import React from 'react';
import './styles.css';
import my_questions_icon from "../../images/question.png";
import friends from "../../images/my-friends.png";
import invite_friends_icon from "../../images/add-friend.png";
import settings from "../../images/settings.png";
import like_icon from "../../images/like.png";
import views from "../../images/view.png";
import LikeStatus from "../like_status";
import SolvedBadge from "../solved_badge";

export default function QuestionHeader (){
	return(
		<div className='question_header'>
			<LikeStatus number={38}/>
			<div className='question_title row'>
				Q. 142 Gozineh2 (Aban-16)
				<SolvedBadge />
			</div>
			<div className='view_status'>
				<img src={views} className='view_icon'/>
				<span className='view_num'>14</span>
			</div>
		</div>
	)
}
