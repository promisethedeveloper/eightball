import React, { useState } from "react";
import "./Eightball.css";

const Eightball = ({ answers }) => {
	const randomIdx = Math.floor(Math.random() * answers.length);
	const handleClick = () => {
		setQuestion(answers[randomIdx].msg);
		setColor(answers[randomIdx].color);
	};

	const reset = () => {
		setColor("black");
		setQuestion("Think of a Question");
	};

	const [color, setColor] = useState("black");
	const [question, setQuestion] = useState("Think of a Question");

	return (
		<div>
			<div
				style={{ backgroundColor: color }}
				onClick={handleClick}
				className="Eightball"
			>
				<h4>{question}</h4>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Eightball;
