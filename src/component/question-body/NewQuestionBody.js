import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.css';
import check_icon from "../../images/check.png";

export default function NewQuestionBody (){
	return(
		<div className='question_body new_question_body'>
			<TextareaAutosize
				placeholder={"type your question here..."}
				className="body_text body_text_input"/>

			<div className='col height-100' >
				<div className='question_image_picker clickable'>
					<span className='question_add_image_text'>
						add image
					</span>
				</div>

			</div>


		</div>

	)
}
