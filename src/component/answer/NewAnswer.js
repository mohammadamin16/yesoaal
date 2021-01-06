import React from 'react';
import './styles.css';
import LikeStatus from "../like_status";
import Tag from "../tag";
import user1 from "../../images/businessman.png"
import check_icon from "../../images/check.png"

export default function NewAnswer(props) {
	return (
		<div className="answer new-answer">
				<div className='col info_col margin-s opacity-50' >
					<LikeStatus number={0} disabled={true} />

					<Tag image={user1} text="Your answer" secondary={true}/>
				</div>

				<div className='col width-100' >
					<div className='answering_hint'>
						know someone who can help? send them <b className='clickable'><u>this link</u></b> to the question
					</div>
					<textarea
						className='new_answer_input_container'
						placeholder={'type your answer...'}
					/>
				</div>
				<div className='col height-100' >
					<span className='image_hint'>*good answers have good pictures!</span>
					<div className='image_picker clickable'>
						<span className='add_image_text'>add image</span>
					</div>
					<div className='submit_btn clickable'>
						<span>Submit</span>
						<img src={check_icon} className='check_icon'/>
					</div>
				</div>
		</div>
	)
}

