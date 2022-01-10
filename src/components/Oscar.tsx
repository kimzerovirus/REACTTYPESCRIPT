import React from 'react';

type OscarProps = {
	children: React.ReactNode;
};

// component를 props로 받을 경우
const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};

export default Oscar;
