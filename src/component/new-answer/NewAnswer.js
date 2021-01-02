import React from 'react';
import './styles.css';
import LikeStatus from "../like_status";
import Tag from "../tag";
import user1 from "../../images/businessman.png"
import clock_icon from "../../images/clock.png"

export default function NewAnswer(props) {
	return (
		<div className="answer new-answer">
				<div className='col info_col margin-s opacity-50' >
					<LikeStatus number={0} disabled={true} />
					<div className='row'>
						<Tag image={user1} text="Your answer" secondary={true}/>
					</div>
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
				</div>
		</div>
	)
}

