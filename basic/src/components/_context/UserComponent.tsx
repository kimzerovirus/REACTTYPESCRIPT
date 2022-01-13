import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserComponent = () => {
	const userContext = useContext(UserContext);
	const handleLogin = () => {
		if (userContext) {
			userContext.setUser({
				name: 'John',
				email: 'John123@example.com',
			});
		}
	};
	const handleLogout = () => {
		if (userContext) {
			userContext.setUser(null);
		}
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<h3>User name is{userContext?.user?.name}</h3>
			<h3>User email is{userContext?.user?.email}</h3>
		</div>
	);
};

export default UserComponent;
