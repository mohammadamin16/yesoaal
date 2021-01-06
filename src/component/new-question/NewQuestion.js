import React from 'react';
import './styles.css';
import {NewQuestionHeader} from '../question-header';
import {NewQuestionBody} from "../question-body";
import {NewQuestionFooter} from "../question-footer";

export default function NewQuestion() {
	return (
		<div className='new-question'>
			<NewQuestionHeader />
			<NewQuestionBody />
			<NewQuestionFooter />

		</div>
	)
}

