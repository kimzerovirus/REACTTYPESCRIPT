import React from 'react';

type GreetProps = {
	name: string;
	count: number;
};

export const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>
				Welcome {props.name} Hello World {props.count}!
			</h2>
		</div>
	);
};
