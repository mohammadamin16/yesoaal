import React from 'react';
import './styles.css';
import views from "../../images/view.png";
import LikeStatus from "../like_status";

export default function NewQuestionHeader (){
	return(
		<div className='question_header'>
			<LikeStatus number={0} disabled={true}/>
			<input className='question_title title_input'
				placeholder={"Insert title here"}
			>

			</input>
			<div className='view_status opacity-50'>
				<img src={views} className='view_icon'/>
				<span className='view_num'>0</span>
			</div>
		</div>
	)
}
