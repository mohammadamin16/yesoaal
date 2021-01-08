import React from 'react';
import './styles.css';
import {QuestionHeader} from '../question-header';
import {QuestionBody} from "../question-body";
import {QuestionFooter} from "../question-footer";

export default function Question() {
	return (
		<div className='question'>
			<QuestionHeader />
			<QuestionBody />
			<QuestionFooter />

		</div>
	)
}
