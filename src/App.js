import React from "react";
import Eightball from "./Eightball";
import answers from "./answers";

function App() {
	return (
		<div className="App">
			<Eightball answers={answers} />
		</div>
	);
}

export default App;
