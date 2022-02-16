import React, { useRef, useState } from 'react';

function WordRelay() {
	const [word, setWord] = useState('끝말잇기');
	const [inputVal, setInputVal] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (word[word.length - 1] === inputVal[0]) {
			setWord(inputVal);
			setInputVal('');
		}
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div className="mt-5 container">
			<div className="mx-auto w-25">
				<div className="w-100 mb-3">
					<p className="text-center">{word}</p>
				</div>
				<form onSubmit={onSubmitHandler}>
					<div className="input-group" style={{ height: '30px' }}>
						<input
							type="text"
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
		</div>
	);
}

export default WordRelay;
