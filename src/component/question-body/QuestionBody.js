import React from 'react';
import './styles.css';
import question_image from "../../images/question-image.png";

export default function QuestionBody (){
	return(
		<div className='question_body'>
			<div className='question_image_container'>
				<img src={question_image} className='question_image'/>
				<div className='black_line'/>
			</div>
			<p className='body_text'>
				this is the question body
			</p>
		</div>

	)
}
