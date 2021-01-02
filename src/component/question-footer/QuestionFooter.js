import React from 'react';
import './styles.css';
import user1 from "../../images/boy.png";
import user2 from "../../images/businessman.png";
import edit from "../../images/edit.png";
import clock from "../../images/clock.png";
import Tag from "../tag";

export default function QuestionFooter (){
	return(
		<div className='question_footer'>
				<div className='question_owners_area'>
					<Tag
						image={user1}
						text={'asked by reza'}
					/>
					<Tag
						image={user2}
						text={'edited by ali'}
					/>
					<Tag
						image={clock}
						text={'3 hours ago'}
					/>
					<img src={edit} className="edit_icon clickable"/>

				</div>
				<div className='tag_area'>
					<div className='tag'>
						<span className='tag_text'>Shimi</span>
					</div>
					<div className='tag'>
						<span className='tag_text'>Acid</span>
					</div>
					<div className='tag'>
						<span className='tag_text'>Shimi3</span>
					</div>
				</div>
			</div>

	)
}
