import React from 'react';
import './styles.css';
import like_icon from "../../images/like.png";
import views from "../../images/view.png";
import question_image from "../../images/question-image.png";
import user1 from "../../images/boy.png";
import user2 from "../../images/businessman.png";
import edit from "../../images/edit.png";
import QuestionHeader from '../question-header';
import QuestionBody from "../question-body";
import QuestionFooter from "../question-footer";

export default function Question() {
	return (
		<div className='question'>
			<QuestionHeader />
			<QuestionBody />
			<QuestionFooter />

		</div>
	)
}

