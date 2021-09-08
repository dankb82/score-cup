import React, { useState } from "react";

const GameInfo = () => {
	const [players, setPlayers] = useState({
		playerOne: "",
		playerTwo: "",
	});

	const [scores, setScores] = useState({
		firstPlayerScore: 0,
		secondPlayerScore: 0,
	});

	return (
		<div>
			<span>Player 1 - 300</span>
			<span>Player 2 - 350</span>
		</div>
	);
};

export default GameInfo;
