import React from 'react';
import './App.css';

import Menu from "./component/menu";
import Header from "./component/header";
import {Question} from "./component/question";
import Comment from "./component/comment";
import PlusButton from "./component/plus_btn";
import {Answer, NewAnswer} from "./component/answer/index";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SettingsScreen from "./screens/settings_screen";
import NewQuestion from "./component/new-question";
import MyQuestionsScreen from "./screens/my_questions_screen";
import MyFriendsScreen from "./screens/my_friends_screen";


function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<div className='container'>
					<div className='right-div'>
						<Menu/>
						<PlusButton/>
					</div>

					<div className='center-div'>
						<div className='main_div'>
							<Switch>
								<Route path="/" exact>
									<Question/>
									<Comment />
									<NewAnswer/>
								</Route>

								<Route path="/settings">
									<SettingsScreen />
								</Route>

								<Route path="/new_question" exact>
									<NewQuestion />
								</Route>

								<Route path="/my_questions" exact>
									<MyQuestionsScreen />
								</Route>

								<Route path="/my_friends" exact>
									<MyFriendsScreen />
								</Route>
							</Switch>

							{/*<NewQuestion />*/}
							{/*<Answer*/}
							{/*	answer={{*/}
							{/*		best:true,*/}
							{/*		body:"2 is false because of this and that reason and 4 is the answer " +*/}
							{/*	"because of page 34 of the book",*/}
							{/*		like_number:8,*/}
							{/*		time:'40 mins ago',*/}
							{/*	}}*/}
							{/*/>*/}
							{/*<Answer*/}
							{/*	answer={{*/}
							{/*		body:"i don't know what is wrong about 2. but here is the explanation about 4",*/}
							{/*		like_number:3,*/}
							{/*		time:'10 mins ago',*/}
							{/*		image:answer_image,*/}
							{/*	}}*/}
							{/*/>*/}


						</div>
					</div>
					<div className='left-div'>

					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
