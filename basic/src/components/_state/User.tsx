import React from 'react';

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = React.useState<AuthUser | null>(null); //타입이 null 또는 AuthUser타입으로 들어갈 수 있다.
	// const [user, setUser] = React.useState<AuthUser>({} as AuthUser); //type assertion 이렇게 하면 ?사용안해도됨
	const handleLogin = () => {
		setUser({
			name: 'david',
			email: 'david123@example.com',
		});
	};
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<h3>User name is {user?.name}</h3>
			{/* user.name이 없을수도 있으므로 ?를 붙여줘야한다. */}
			<h3>User email is {user?.email}</h3>
		</div>
	);
};

export default User;
