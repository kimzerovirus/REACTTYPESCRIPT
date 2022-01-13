import React from 'react';

type ContainerProps = {
	styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
	return <h2 style={props.styles}>Text content goes here</h2>;
};

export default Container;
