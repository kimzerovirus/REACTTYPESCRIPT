import React from 'react';

// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNum: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNum,
	totalQuestions,
}) => {
	return (
		<div>
			<p className="number">
				Question: {questionNum} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			{/* angerouslySetInnerHTML 은 브라우저 DOM에서 innerHTML 을 사용하기 위한 React의 대체 방법입니다. 
			dangerouslySetInnerHTML은 브라우저 DOM에서 innerHTML을 사용하기 위한 React의 대체 방법입니다.
			일반적으로 코드에서 HTML을 설정하는 것은 사이트 간 스크립팅 공격에 쉽게 노출될 수 있기 때문에 위험합니다.
			따라서 React에서 직접 HTML을 설정할 수는 있지만, 위험하다는 것을 상기시키기 위해 dangerouslySetInnerHTML을 작성하고 __html 키로 객체를 전달해야 합니다.
			*/}
			<div>
				{answers.map(answer => (
					<ButtonWrapper
						key={answer}
						correct={userAnswer?.correctAnswer === answer}
						userClicked={userAnswer?.answer === answer}
					>
						<button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</ButtonWrapper>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
