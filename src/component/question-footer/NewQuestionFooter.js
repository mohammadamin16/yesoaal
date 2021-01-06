import React from 'react';
import './styles.css';
import user1 from "../../images/boy.png";
import user2 from "../../images/businessman.png";
import edit from "../../images/edit.png";
import clock from "../../images/clock.png";
import Tag from "../tag";
import check_icon from "../../images/check.png"
import SolvedBadge from "../solved_badge";
import TextareaAutosize from "react-textarea-autosize";


export default function QuestionFooter (){
	return(
		<div className='question_footer'>
				<div className='question_owners_area opacity-50'>
					<Tag
						image={user1}
						text={'asked by you'}
						disabled={true}
					/>

				</div>
				<div className='submit_btn_2 clickable'>
					Submit
					<img src={check_icon} className='check_icon'/>
				</div>
				<div className='tag_area'>
					<TextareaAutosize
						placeholder={"separate with space "}
						className="tag"
						maxRows={1}
					/>
				</div>
			</div>

	)
}
