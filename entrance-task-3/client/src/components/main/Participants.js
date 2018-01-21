import React from 'react';
import moment from 'moment';

const Participants = ({ users  }) => {
	const totalUsers = users.length;
	const { avatarUrl, login } = totalUsers && users[0];

	if(totalUsers === 0) return (<div className="participants__member">Создать - создали, а пригласить - забыли :(</div>)
	return (
		<div className="participants">
			<img 
				className="participants__image"
				width="24"
				height="24"
				src={avatarUrl}
				alt={login}
			></img>
			<div className="participants__member">{login}</div>
			{totalUsers > 1 && <div className="participants__others">и ещё {totalUsers - 1}</div>}
		</div>
	)
};
export default Participants;