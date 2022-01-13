import React from 'react';

type StatusProps = {
	status: 'loading' | 'success' | 'error'; //들어올 수 있는 문자열을 지정한다.
};

const Status = (props: StatusProps) => {
	let message: string;
	switch (props.status) {
		case 'loading':
			message = 'Loading...';
			break;
		case 'success':
			message = 'Data fetched successfully!';
			break;
		case 'error':
			message = 'Error fetching data';
			break;
	}

	return (
		<>
			<h2>{message}</h2>
		</>
	);
};

export default Status;
