import React, { useState } from 'react';

const LoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
		// setIsLoggedIn(0); js와 달리 ts는 타입추론으로 불리언이 아닌 넘버가 들어갔다고 에러를 띄운다.
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
		</div>
	);
};

export default LoggedIn;
