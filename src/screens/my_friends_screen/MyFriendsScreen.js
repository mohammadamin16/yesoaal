import React from 'react';
import './styles.css';
import ProfileCard from "../../component/profile_card";

export default function MyFriendsScreen(props) {
	return (
		<div className="my_friends_screen">
			<ProfileCard />
			<ProfileCard />
		</div>
	)
}

