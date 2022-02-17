import React, { useEffect, useRef, useState } from 'react';

interface ResultState {
	result: sbo[];
	input: number[];
	tries: number;
}

interface sbo {
	strike?: number;
	ball?: number;
	out?: string;
}

function BaseBall() {
	const [inputVal, setInputVal] = useState('');
	const [answer, setAnswer] = useState<number[]>();
	const [results, setResults] = useState<ResultState>({
		result: [] as sbo[],
		input: [] as number[],
		tries: 0,
	});
	const inputRef = useRef<HTMLInputElement>(null);
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const getNumbers = () => {
		const chosen = rand([]);
		//Math.random() * (max - min) + min;
		console.log(chosen);
		return chosen;
	};

	const rand = (arr: number[], num?: number) => {
		if (!num) {
			num = Math.floor(Math.random() * 9 + 1);
			numbers.push(0);
		}
		arr.push(...numbers.splice(num - 1, 1));

		if (arr.length < 4) rand(arr, Math.floor(Math.random() * 10 + 1)); //Math.floor(Math.random())계산하면서 오류가 있나 이렇게 해서 배열에서 원하는 수 뽑는게 아닌 바로 배열에 집어 넣으면 난수값이 0으로 들어와서 이상함
		return arr;
	};

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputVal('');
		let strike = 0;
		let ball = 0;
		if (results.tries < 9) {
			if (inputVal === answer?.join('')) {
				alert('홈런');
				setResults({
					result: [] as sbo[],
					input: [] as number[],
					tries: 0,
				});
				setAnswer(getNumbers());
			} else {
				const inputArray = inputVal.split('').map(v => parseInt(v));
				for (let i = 0; i < 4; i++) {
					if ((answer as number[])[i] === inputArray[i]) {
						// 일치할 경우 스트라이크
						strike += 1;
					} else if ((answer as number[]).includes(inputArray[i])) {
						// 정답 배열 안에 포함되는 경우 볼
						ball += 1;
					}
				}
				if (strike === 0 && ball === 0) {
					setResults({
						result: [...(results as ResultState).result, { out: '아웃' }],
						input: [...(results as ResultState).input, parseInt(inputVal)],
						tries: results.tries + 1,
					});
				} else {
					setResults({
						result: [...(results as ResultState).result, { strike, ball }],
						input: [...(results as ResultState).input, parseInt(inputVal)],
						tries: results.tries + 1,
					});
				}
			}
		} else {
			alert('실패, 정답:' + answer);
			setResults({
				result: [] as sbo[],
				input: [] as number[],
				tries: 0,
			});
			setAnswer(getNumbers());
		}
	};

	useEffect(() => {
		setAnswer(getNumbers());
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="mt-5 container">
			<div className="mx-auto w-25">
				<div className="w-100 mb-3">
					<p className="text-center">도전 횟수: {results.tries}</p>
				</div>
				<form onSubmit={onSubmitHandler}>
					<div className="input-group" style={{ height: '30px' }}>
						<input
							type="number"
							className="form-control"
							value={inputVal}
							onChange={e => setInputVal(e.currentTarget.value)}
							ref={inputRef}
						/>
						<div className="input-group-prepend">
							<button className="btn btn-outline-secondary">등록</button>
						</div>
					</div>
				</form>
			</div>
			<table className="table mt-3 w-50 mx-auto">
				{results.result[0] && (
					<tr>
						<th>횟수</th>
						<th>입력값</th>
						<th>스트라이크</th>
						<th>볼</th>
						<th>아웃</th>
					</tr>
				)}
				{results.result[0] &&
					results.result.map((v, i) => (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{results.input[i]}</td>
							<td>{v.strike}</td>
							<td>{v.ball}</td>
							<td>{v.out}</td>
						</tr>
					))}
			</table>
		</div>
	);
}
export default BaseBall;
