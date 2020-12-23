import React from 'react';
import './App.css';
import logo from './images/raise-hand.png'
import avatar from './images/man.png'
import my_questions_icon from './images/question.png'
import comments from './images/comments.png'
import friends from './images/friends.png'
import invite_friends_icon from './images/add-friends.png'
import settings from './images/settings.png'
import like_icon from './images/good.png'
import dislike_icon from './images/thumb-up.png'
import user1 from './images/boy.png'
import user2 from './images/businessman.png'
import edit from './images/edit.png'
import views from './images/view.png'
import question_image from './images/question-image.png'


import Searchbar from "./component/searchbar";
import Menu from "./component/menu";

function Header() {
	return (
		<div className='header'>
			<div className='user_info'>
				<img src={avatar} className='avatar'/>
				<span className='username'>Sam Sepiol</span>
			</div>
			<Searchbar />
			<div className='trademark'>
				<span className='site_name'>Ye-Soaal</span>
				<img src={logo} className='logo'/>
			</div>
		</div>
	)
}


function App() {
	return (
		<div className="App">
			<Header/>
			<div className='main_layout'>
				<div className='right-div'>
					<Menu />
				</div>

				<div className='center-div'>
					<div className='main_div'>
						<div className='question'>
							<div className='question_header'>
								<div className='like_status'>
									<img src={like_icon} className='like_icon clickable'/>
									38
									<img src={dislike_icon} className='dislike_icon clickable'/>
								</div>
								<div className='question_title'>
									Q. 142 Gozineh2 (Aban-16)
								</div>
								<div className='view_status'>
									<img src={views} className='view_icon'/>
									14
								</div>
							</div>
							<div className='question_body'>
								this is the question body
							</div>
							<div className='question_image_container'>
								<img src={question_image} className='question_image'/>
							</div>
							<div className='question_footer'>
								<div className='question_owners_area'>
									<div className='asked_by_tag'>
										<img src={user1} className="tag_avatar"/>
										<div className='tag_text'>
											asked by reza
										</div>
									</div>
									<div className='asked_by_tag'>
										<img src={user2} className="tag_avatar"/>
										<div className='tag_text'>
											edited by ali
										</div>
									</div>
									<div className='asked_by_tag'>
										<div className='tag_text'>
											3 hours ago
										</div>
									</div>
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

						</div>

						<div className='question answer'>
							<div className='question_header'>
								<div className='like_status'>
									<img src={like_icon} className='like_icon clickable'/>
									38
									<img src={dislike_icon} className='dislike_icon clickable'/>
								</div>
								<div className='question_title'>
									Q. 142 Gozineh2 (Aban-16)
								</div>
							</div>
							<div className='question_body'>
								this is the question body
							</div>
							<div className='question_image_container'>
								<img src={question_image} className='question_image'/>
							</div>
							<div className='question_footer'>
								<div className='question_owners_area'>
									<div className='asked_by_tag'>
										<img src={user1} className="tag_avatar"/>
										<div className='tag_text'>
											asked by reza
										</div>
									</div>
									<div className='asked_by_tag'>
										<img src={user2} className="tag_avatar"/>
										<div className='tag_text'>
											edited by ali
										</div>
									</div>
									<div className='asked_by_tag'>
										<div className='tag_text'>
											3 hours ago
										</div>
									</div>
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

						</div>


					</div>
				</div>
				<div className='left-div'>

				</div>
			</div>
		</div>
	);
}

export default App;
