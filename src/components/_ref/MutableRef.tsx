import { useRef, useState, useEffect } from 'react';

const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null); //number를 html에 텍스트처럼 나타내려는건가?

	const stopTimer = () => {
		if (interValRef.current) window.clearInterval(interValRef.current);
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
		return () => {
			stopTimer();
		};
	}, []);

	return (
		<div>
			HookTimer - {timer} -
			<button onClick={() => stopTimer()}>stop Timer</button>
		</div>
	);
};

export default MutableRef;
