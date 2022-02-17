import React, { useState } from 'react';

enum ActionType {
	ROCK = 1,
	PAPER = 2,
	SCISSORS = 3,
}

enum ResultType {
	D = '비겼습니다',
	W = '플레이어가 이겼습니다',
	L = '플레이어가 졌습니다',
}

interface ResultState {
	player: string;
	computer: string;
	result: string;
}

function RockPaperScissors() {
	const [visible, setVisible] = useState(true);
	const [result, setResult] = useState<ResultState>();

	const gameHandler = (player: ActionType) => {
		setVisible(false);
		const computer = Math.floor(Math.random() * 3 + 1);
		const result = solution(player, computer);
		setResult({
			player: inputVal(player),
			computer: inputVal(computer),
			result,
		});
	};

	const solution = (player: number, computer: number): string => {
		let result: ResultType;
		if (player === computer) result = ResultType.D;
		else if (player === 1 && computer === 3) result = ResultType.W;
		else if (player === 2 && computer === 1) result = ResultType.W;
		else if (player === 3 && computer === 2) result = ResultType.W;
		else result = ResultType.L;
		return result;
	};

	const inputVal = (input: number): string => {
		switch (input) {
			case 1:
				return '바위';
			case 2:
				return '보';
			case 3:
				return '가위';
			default:
				return '에러';
		}
	};

	return (
		<>
			{visible ? (
				<div className="mx-auto mt-5" style={{ width: '300px' }}>
					<button
						onClick={() => gameHandler(ActionType.SCISSORS)}
						className="btn btn-primary"
						style={{ width: '100px' }}
					>
						가위
					</button>
					<button
						onClick={() => gameHandler(ActionType.ROCK)}
						className="btn btn-secondary"
						style={{ width: '100px' }}
					>
						바위
					</button>
					<button
						onClick={() => gameHandler(ActionType.PAPER)}
						className="btn btn-warning"
						style={{ width: '100px' }}
					>
						보
					</button>
				</div>
			) : (
				<>
					<div className="text-center mt-5 container">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">플레이어: {result?.player}</li>
							<li className="list-group-item">컴퓨터: {result?.computer}</li>
							<li className="list-group-item">결과: {result?.result}</li>
						</ul>
						<button className="btn btn-primary mt-3" onClick={() => setVisible(true)}>
							새로운 게임
						</button>
					</div>
				</>
			)}
		</>
	);
}

export default RockPaperScissors;
