import React from 'react';
import './App.css';

import Menu from "./component/menu";
import Header from "./component/header";
import Question from "./component/question";
import Comment from "./component/comment";
import Answer from "./component/answer";
import answer_image from "./images/answer-image.png";
import NewAnswer from "./component/new-answer";

function App() {
	return (
		<div className="App">
			<Header/>
			<div className='container'>
				<div className='right-div'>
					<Menu />
				</div>

				<div className='center-div'>
					<div className='main_div'>
						<Question />
						<Comment />
						<Answer
							answer={{
								best:true,
								body:"2 is false because of this and that reason and 4 is the answer " +
							"because of page 34 of the book",
								like_number:8,
								time:'40 mins ago',
							}}
						/>
						<Answer
							answer={{
								body:"i don't know what is wrong about 2. but here is the explanation about 4",
								like_number:3,
								time:'10 mins ago',
								image:answer_image,
							}}
						/>
						<NewAnswer />



					</div>
				</div>
				<div className='left-div'>

				</div>
			</div>
		</div>
	);
}

export default App;
