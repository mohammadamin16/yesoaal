import React from 'react';
import './styles.css';
import LikeStatus from "../like_status";
import star from "../../images/star.png";
import Tag from "../tag";
import user1 from "../../images/businessman.png"
import clock_icon from "../../images/clock.png"

export default function Answer(props) {
	return (
		<div className={props.answer.best ? "answer best_answer" : "answer"}>
			<div className='col width-100' >
				<div className='row margin-s' >
					<LikeStatus number={props.answer.like_number} />

					<div className='col answer_body' >
						{props.answer.body}
					<img src={props.answer.image} className='answer_image' />
					</div>
				</div>
				<div className='row'>
					<Tag image={user1} text="Mohammad's answer" secondary={true}/>
					<Tag image={clock_icon} text="40 mins ago" secondary={true} />
				</div>
			</div>
			<div className={props.answer.best ? "star_container" : "star_container no-display"}>
				<img src={star} className='star_icon' />
			</div>
		</div>
	)
}

